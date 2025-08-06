
"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  analyzeWriting,
  type AnalyzeWritingOutput,
} from "@/ai/flows/analyze-writing";
import {
  improveSentence,
  type ImproveSentenceOutput,
} from "@/ai/flows/improve-sentence";
import type { Lesson } from "@/lib/levels";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FeedbackPanel } from "./feedback-panel";
import { Eye, Loader2, Sparkles, Trophy } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { Progress } from "../ui/progress";
import { useParams } from "next/navigation";
import { useLifeline } from "@/hooks/use-lifeline";
import { useUser } from "@/hooks/use-user";
import { useApiKey } from "@/hooks/use-api-key";


const writingModes = ["student", "researcher", "creative"] as const;

const formSchema = z.object({
  text: z.string().min(20, {
    message: "Please write at least 20 characters for a meaningful analysis.",
  }),
  mode: z.enum(writingModes),
});

type SuggestionsState = {
  loading: boolean;
  data: ImproveSentenceOutput | null;
  error: string | null;
};

interface LikheeEditorProps {
  lesson: Lesson;
}

export function LikheeEditor({ lesson }: LikheeEditorProps) {
  const [result, setResult] = useState<AnalyzeWritingOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showSolutionDialog, setShowSolutionDialog] = useState(false);
  const [showConfirmSolutionDialog, setShowConfirmSolutionDialog] = useState(false);
  const { toast } = useToast();
  const params = useParams();
  const { lifelines, useLifeline: consumeLifeline } = useLifeline();
  const { addXp } = useUser();
  const { apiKey } = useApiKey();

  const [selection, setSelection] = useState<{ start: number; end: number } | null>(null);
  const [showSuggestionPopover, setShowSuggestionPopover] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestionsState>({
    loading: false,
    data: null,
    error: null,
  });

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: lesson.startingText || "",
      mode: lesson.mode || "student",
    },
  });

  // Update default text if lesson changes
  useEffect(() => {
    form.reset({
      text: lesson.startingText || "",
      mode: lesson.mode || "student",
    });
  }, [lesson, form]);

  const handleSelection = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const { selectionStart, selectionEnd } = textarea;
    if (selectionStart !== selectionEnd && selectionEnd - selectionStart > 5) {
      setSelection({ start: selectionStart, end: selectionEnd });
      setShowSuggestionPopover(true);
    } else {
      setShowSuggestionPopover(false);
      setSelection(null);
    }
  };

  const handleGetSuggestions = async () => {
    if (!selection) return;
    const text = form.getValues("text").substring(selection.start, selection.end);
    const mode = form.getValues("mode");

    setSuggestions({ loading: true, data: null, error: null });

    try {
      const result = await improveSentence({ sentence: text, mode, apiKey: apiKey || undefined });
      setSuggestions({ loading: false, data: result, error: null });
    } catch (error) {
      console.error("Error improving sentence:", error);
      setSuggestions({
        loading: false,
        data: null,
        error: "Failed to get suggestions.",
      });
      toast({
        title: "Improvement Failed",
        description:
          "There was an error improving the sentence. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAcceptSuggestion = (suggestion: string) => {
    if (!selection) return;
    const currentText = form.getValues("text");
    const newText =
      currentText.substring(0, selection.start) +
      suggestion +
      currentText.substring(selection.end);
    form.setValue("text", newText);
    setShowSuggestionPopover(false);
    setSelection(null);
    setSuggestions({ loading: false, data: null, error: null });
  };

  const completeChallenge = () => {
    const levelIndex = params.level;
    const lessonIndex = params.lesson;
    const lessonKey = `${levelIndex}-${lessonIndex}`;
    
    try {
      const savedProgress = localStorage.getItem("likhee-progress") || '{}';
      const progress = JSON.parse(savedProgress);
      // Only add XP if the lesson is not already completed
      if (!progress[lessonKey]) {
        addXp(10);
        progress[lessonKey] = true;
        localStorage.setItem("likhee-progress", JSON.stringify(progress));
      }
      setShowSuccessDialog(true);

    } catch (error) {
      console.error("Failed to save progress to localStorage", error);
    }
  };

  const handleViewSolution = () => {
    if (lifelines > 0) {
      setShowConfirmSolutionDialog(true);
    } else {
       toast({
        title: "Out of Lifelines",
        description: "You need to wait for a lifeline to regenerate before viewing a solution.",
        variant: "destructive",
      });
    }
  }

  const confirmViewSolution = () => {
    consumeLifeline();
    setShowConfirmSolutionDialog(false);
    setShowSolutionDialog(true);
  }

  // Function to check similarity between user text and solution
  const isSolutionSimilar = (userText: string, solutionText: string) => {
    const normalize = (text: string) => 
      text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
    
    const userWords = new Set(normalize(userText));
    const solutionWords = normalize(solutionText);

    if (solutionWords.length === 0) return true; // Cannot be similar to an empty solution

    const commonWords = solutionWords.filter(word => userWords.has(word));
    const similarity = commonWords.length / solutionWords.length;
    
    return similarity >= 0.7; // 70% similarity threshold
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);

    // First, check for similarity with the solution
    if (isSolutionSimilar(values.text, lesson.solution)) {
      completeChallenge();
      // We can still get AI feedback even if we pass via similarity
      try {
         const analysisResult = await analyzeWriting({ text: values.text, mode: values.mode, apiKey: apiKey || undefined });
         setResult({...analysisResult, score: lesson.targetScore}); // Show target score on pass
      } catch (error) {
        console.error("Error analyzing writing:", error);
      } finally {
        setIsLoading(false);
      }
      return;
    }

    // If not similar, proceed with normal AI scoring
    try {
      const analysisResult = await analyzeWriting({
        text: values.text,
        mode: values.mode,
        apiKey: apiKey || undefined,
      });
      setResult(analysisResult);
      if (analysisResult.score >= lesson.targetScore) {
        completeChallenge();
      }
    } catch (error) {
      console.error("Error analyzing writing:", error);
      toast({
        title: "Analysis Failed",
        description:
          "There was an error analyzing your text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  const score = result?.score ?? 0;
  const progress = Math.min((score / lesson.targetScore) * 100, 100);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-2xl font-bold">{lesson.title}</CardTitle>
            <Button variant="outline" size="sm" onClick={handleViewSolution} disabled={lifelines === 0}>
              <Eye className="mr-2"/>
              View Solution
            </Button>
          </div>
          <p className="text-muted-foreground">{lesson.description}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
             <Progress value={progress} className="w-full h-4" />
             <span className="text-lg font-bold text-primary">{score}/{lesson.targetScore}</span>
          </div>
          <p className="text-sm text-center text-muted-foreground">
            Rewrite the text to achieve a score of <span className="font-bold text-foreground">{lesson.targetScore}</span> or higher to complete the challenge.
          </p>
        </CardContent>
      </Card>
      
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
        >
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="mode"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-base font-semibold text-foreground">
                    Writing Mode
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-col space-y-1 md:flex-row md:space-x-4 md:space-y-0"
                      disabled
                    >
                      {writingModes.map((mode) => (
                        <FormItem
                          key={mode}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={mode} />
                          </FormControl>
                          <FormLabel className="font-normal capitalize">
                            {mode}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Popover open={showSuggestionPopover} onOpenChange={setShowSuggestionPopover}>
              <PopoverTrigger asChild>
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold text-foreground">
                          Your Text
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            ref={textareaRef}
                            onSelect={handleSelection}
                            placeholder="Start writing here... Select a sentence to get suggestions."
                            className="min-h-[400px] resize-y bg-card p-4 text-base shadow-inner"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div style={{ display: 'none' }} />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-96" align="start">
                <div className="space-y-4">
                  <h4 className="font-medium leading-none">Improve Sentence</h4>
                  <p className="text-sm text-muted-foreground">
                    Get AI-powered suggestions to rephrase your selected sentence.
                  </p>
                  
                  {suggestions.loading && (
                    <div className="flex items-center justify-center p-4">
                      <Loader2 className="h-6 w-6 animate-spin" />
                    </div>
                  )}

                  {!suggestions.loading && !suggestions.data && (
                     <Button onClick={handleGetSuggestions} className="w-full">
                       <Sparkles className="mr-2 h-4 w-4" /> Get Suggestions
                     </Button>
                  )}

                  {suggestions.data && (
                     <Card>
                       <CardHeader className="p-4">
                         <CardTitle className="text-sm font-medium">Suggestions</CardTitle>
                       </CardHeader>
                       <CardContent className="p-4 pt-0 space-y-2">
                        <p className="text-xs text-muted-foreground italic ">{suggestions.data.feedback}</p>
                         {suggestions.data.suggestions.map((s, i) => (
                           <Button
                             key={i}
                             variant="outline"
                             className="w-full h-auto text-wrap justify-start"
                             onClick={() => handleAcceptSuggestion(s)}
                           >
                             {s}
                           </Button>
                         ))}
                       </CardContent>
                     </Card>
                  )}

                  {suggestions.error && (
                    <p className="text-sm text-destructive">{suggestions.error}</p>
                  )}
                </div>
              </PopoverContent>
            </Popover>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full text-lg font-bold shadow-[4px_4px_0px_0px_hsl(var(--primary-foreground))] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:shadow-none"
              size="lg"
            >
              {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              {isLoading ? "Analyzing..." : "Analyze Writing"}
            </Button>
          </div>

          <div className="h-full min-h-[500px] lg:mt-9">
            <FeedbackPanel result={result} isLoading={isLoading} />
          </div>
        </form>
      </Form>
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-2xl font-bold font-headline flex items-center justify-center gap-2">
               <Trophy className="w-8 h-8 text-yellow-400" /> Challenge Complete!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Congratulations! You scored {result?.score} and beat the target of {lesson.targetScore}. You earned 10 XP!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Link href="/" passHref>
              <AlertDialogAction className="w-full">Back to Levels</AlertDialogAction>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={showConfirmSolutionDialog} onOpenChange={setShowConfirmSolutionDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>View Solution?</AlertDialogTitle>
            <AlertDialogDescription>
              This will cost one lifeline. Are you sure you want to see the solution for this challenge?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmViewSolution}>View Solution</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
       <AlertDialog open={showSolutionDialog} onOpenChange={setShowSolutionDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Challenge Solution</AlertDialogTitle>
            <AlertDialogDescription>
             {lesson.solution}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
             <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
