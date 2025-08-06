"use client";

import type { AnalyzeWritingOutput } from "@/ai/flows/analyze-writing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, Lightbulb, Sparkles, Target } from "lucide-react";

interface FeedbackPanelProps {
  result: AnalyzeWritingOutput | null;
  isLoading: boolean;
}

const getScoreRating = (score: number): { rating: string; className: string } => {
  if (score >= 90) return { rating: "Perfect", className: "bg-green-500" };
  if (score >= 81) return { rating: "Excellent", className: "bg-green-400" };
  if (score >= 71) return { rating: "Very Good", className: "bg-blue-400" };
  if (score >= 60) return { rating: "Good", className: "bg-yellow-500" };
  return { rating: "Not Good", className: "bg-red-500" };
};

const LoadingSkeleton = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-1/2" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-2/3" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-1/2" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </CardContent>
    </Card>
  </div>
);

export function FeedbackPanel({ result, isLoading }: FeedbackPanelProps) {
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (!result) {
    return (
      <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed bg-card p-8 text-center text-muted-foreground">
        <div>
          <Sparkles className="mx-auto h-12 w-12" />
          <h3 className="mt-4 text-lg font-medium text-foreground">
            Your feedback will appear here
          </h3>
          <p className="mt-1 text-sm">
            Once you're done writing, click "Analyze" to get personalized suggestions and your score.
          </p>
        </div>
      </div>
    );
  }

  const { rating, className } = getScoreRating(result.score);

  return (
    <div className="space-y-6">
      <Card className="border-primary/50 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-2xl">Your Score</CardTitle>
          <div className="flex items-center justify-center gap-4">
            <p className="text-7xl font-bold text-primary">{result.score}</p>
            <Badge className={`${className} text-lg text-white`}>{rating}</Badge>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Target className="h-6 w-6 text-primary" />
            Overall Feedback
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">{result.overallFeedback}</p>
        </CardContent>
      </Card>

      {result.lineSpecificSuggestions &&
        result.lineSpecificSuggestions.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Sparkles className="h-6 w-6 text-primary" />
                Line Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {result.lineSpecificSuggestions.map((suggestion, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>Suggestion #{index + 1}</AccordionTrigger>
                    <AccordionContent>{suggestion}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        )}

      <div className="grid gap-6 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <BookOpen className="h-6 w-6 text-primary" />
              Lexical Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">{result.lexicalTips}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Lightbulb className="h-6 w-6 text-primary" />
              Clarity & Persuasion
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">{result.clarityTips}</p>
            {result.persuasiveTips && <p className="text-foreground">{result.persuasiveTips}</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
