// This file contains the Genkit flow for providing AI-powered suggestions on how to rephrase a sentence for improved clarity, conciseness, and impact.

'use server';

/**
 * @fileOverview Provides AI-powered suggestions on how to rephrase a sentence for improved clarity, conciseness, and impact.
 *
 * - improveSentence - A function that accepts a sentence and returns suggestions for improvement.
 * - ImproveSentenceInput - The input type for the improveSentence function.
 * - ImproveSentenceOutput - The return type for the improveSentence function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

const ImproveSentenceInputSchema = z.object({
  sentence: z.string().describe('The sentence to be improved.'),
  mode: z.enum(['student', 'researcher', 'creative']).describe('The writing mode.'),
  apiKey: z.string().optional().describe('Optional API key for Google AI.'),
});
export type ImproveSentenceInput = z.infer<typeof ImproveSentenceInputSchema>;

const ImproveSentenceOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of suggested rephrased sentences.'),
  feedback: z.string().describe('Overall feedback on the sentence.'),
});
export type ImproveSentenceOutput = z.infer<typeof ImproveSentenceOutputSchema>;

export async function improveSentence(input: ImproveSentenceInput): Promise<ImproveSentenceOutput> {
  const customAi = input.apiKey ? genkit({
    plugins: [googleAI({ apiKey: input.apiKey })],
    model: 'googleai/gemma-3n-e4b-it',
  }) : ai;
  
  const prompt = customAi.definePrompt({
    name: 'improveSentencePrompt',
    input: {schema: ImproveSentenceInputSchema},
    prompt: `You are an AI writing assistant specializing in sentence improvement. You will receive a sentence and provide suggestions on how to rephrase it for improved clarity, conciseness, and impact, keeping in mind the selected writing mode.

  Sentence: {{{sentence}}}
  Writing Mode: {{{mode}}}

  Your output must be a valid JSON object that conforms to the following Zod schema:

  """
  ${JSON.stringify(ImproveSentenceOutputSchema.jsonSchema)}
  """

  Instructions for each field:
  - suggestions: Provide exactly 3 alternative phrasings for the sentence.
  - feedback: Provide a one-sentence overall feedback on the original sentence.
  `,
  });

  const improveSentenceFlow = customAi.defineFlow(
    {
      name: 'improveSentenceFlow',
      inputSchema: ImproveSentenceInputSchema,
      outputSchema: ImproveSentenceOutputSchema,
    },
    async (flowInput) => {
      const response = await prompt(flowInput);
      const jsonText = response.text.trim().replace(/^```json/, '').replace(/```$/, '').trim();
      return ImproveSentenceOutputSchema.parse(JSON.parse(jsonText));
    }
  );

  return improveSentenceFlow(input);
}