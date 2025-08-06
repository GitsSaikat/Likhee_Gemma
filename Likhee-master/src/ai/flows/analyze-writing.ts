// This file contains the Genkit flow for analyzing writing and providing feedback.

'use server';

/**
 * @fileOverview Provides an AI-powered writing analysis and feedback flow.
 *
 * - analyzeWriting - The main function to analyze writing and provide feedback.
 * - AnalyzeWritingInput - The input type for the analyzeWriting function.
 * - AnalyzeWritingOutput - The output type for the analyzeWriting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

const AnalyzeWritingInputSchema = z.object({
  text: z.string().describe('The text to analyze.'),
  mode: z.enum(['student', 'researcher', 'creative']).describe('The writing mode.'),
  apiKey: z.string().optional().describe('Optional API key for Google AI.'),
});

const AnalyzeWritingOutputSchema = z.object({
  score: z.number().describe('A score from 0-100 evaluating the writing quality.'),
  overallFeedback: z.string().describe('Overall feedback on the writing.'),
  lineSpecificSuggestions: z.array(z.string()).describe('An array of strings with suggestions for specific lines.'),
  lexicalTips: z.string().describe('A single string containing tips to improve lexical resources.'),
  clarityTips: z.string().describe('A single string containing tips to improve clarity.'),
  persuasiveTips: z.string().describe('A single string containing tips to improve persuasive writing (if applicable).'),
});

export type AnalyzeWritingInput = z.infer<typeof AnalyzeWritingInputSchema>;
export type AnalyzeWritingOutput = z.infer<typeof AnalyzeWritingOutputSchema>;

export async function analyzeWriting(input: AnalyzeWritingInput): Promise<AnalyzeWritingOutput> {
  const customAi = input.apiKey ? genkit({
    plugins: [googleAI({ apiKey: input.apiKey })],
    model: 'googleai/gemma-3n-e4b-it',
  }) : ai;

  const analyzeWritingPrompt = customAi.definePrompt({
    name: 'analyzeWritingPrompt',
    input: {schema: AnalyzeWritingInputSchema},
    prompt: `You are an AI writing assistant providing feedback. Your role is to be a fair but thorough evaluator to help users improve their writing quality.

    Analyze the following text based on the specified writing mode.
    Writing Mode: {{mode}}
    Text: {{{text}}}

    Provide the feedback as a valid JSON object. The JSON object must conform to the following Zod schema:
    
    """
    ${JSON.stringify(AnalyzeWritingOutputSchema.jsonSchema)}
    """

    Instructions for each field:
    - score: Provide a score from 0 to 100 based on the writing's quality, considering clarity, lexical diversity, persuasiveness, and adherence to the mode.
    - overallFeedback: Give high-level, constructive feedback on the entire piece of writing.
    - lineSpecificSuggestions: Provide an array of specific string suggestions. If there are no specific suggestions, provide an empty array. Each element in the array must be a string, not an object.
    - lexicalTips: Offer tips on how to improve word choice and vocabulary. This must be a single string, not a list.
    - clarityTips: Offer tips on how to make the writing clearer and more understandable. This must be a single string, not a list.
    - persuasiveTips: Offer tips on how to make the writing more persuasive. If the mode is not persuasive, this can be a general writing tip. This must be a single string, not a list.
    `,
  });

  const analyzeWritingFlow = customAi.defineFlow(
    {
      name: 'analyzeWritingFlow',
      inputSchema: AnalyzeWritingInputSchema,
      outputSchema: AnalyzeWritingOutputSchema,
    },
    async (flowInput) => {
      const response = await analyzeWritingPrompt(flowInput);
      const jsonText = response.text.trim().replace(/^```json/, '').replace(/```$/, '').trim();
      return AnalyzeWritingOutputSchema.parse(JSON.parse(jsonText));
    }
  );

  return analyzeWritingFlow(input);
}