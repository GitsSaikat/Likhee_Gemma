
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  analyzeWriting,
  type AnalyzeWritingOutput,
} from "@/ai/flows/analyze-writing";

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
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ChatHistorySidebar } from "./chat-history-sidebar";
import { v4 as uuidv4 } from 'uuid';
import { useApiKey } from "@/hooks/use-api-key";

const writingModes = ["student", "researcher", "creative"] as const;

const formSchema = z.object({
  text: z.string().min(50, {
    message: "Please write at least 50 characters for a meaningful analysis.",
  }),
  mode: z.enum(writingModes),
});

export type LexicaHistoryItem = {
    id: string;
    text: string;
    mode: 'student' | 'researcher' | 'creative';
    result: AnalyzeWritingOutput;
    timestamp: number;
}

export function LexicaEditor() {
  const [history, setHistory] = useState<LexicaHistoryItem[]>([]);
  const [activeItem, setActiveItem] = useState<LexicaHistoryItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { apiKey } = useApiKey();

  useEffect(() => {
    try {
        const savedHistory = localStorage.getItem("lexica-history");
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    } catch (error) {
        console.error("Failed to load history from localStorage", error);
    }
  }, []);

  const saveHistory = (newHistory: LexicaHistoryItem[]) => {
    setHistory(newHistory);
    try {
        localStorage.setItem("lexica-history", JSON.stringify(newHistory));
    } catch (error) {
        console.error("Failed to save history to localStorage", error);
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
      mode: "student",
    },
  });

  useEffect(() => {
    if (activeItem) {
        form.reset({
            text: activeItem.text,
            mode: activeItem.mode
        });
    }
  }, [activeItem, form]);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setActiveItem(null);
    form.reset(values);
    try {
      const analysisResult = await analyzeWriting({
        text: values.text,
        mode: values.mode,
        apiKey: apiKey || undefined,
      });

      const newItem: LexicaHistoryItem = {
        id: uuidv4(),
        text: values.text,
        mode: values.mode,
        result: analysisResult,
        timestamp: Date.now()
      };
      
      const newHistory = [newItem, ...history];
      saveHistory(newHistory);
      setActiveItem(newItem);

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

  const handleSelectHistory = (item: LexicaHistoryItem) => {
    setActiveItem(item);
  }

  const handleClearHistory = () => {
    saveHistory([]);
    setActiveItem(null);
    form.reset({ text: "", mode: "student"});
  }

  const handleNewChat = () => {
    setActiveItem(null);
    form.reset({ text: "", mode: "student"});
  }

  return (
    <div className="flex h-screen">
        <ChatHistorySidebar 
            history={history}
            activeItemId={activeItem?.id}
            onSelectHistory={handleSelectHistory}
            onClearHistory={handleClearHistory}
            onNewChat={handleNewChat}
        />
        <main className="flex-1 p-6 overflow-y-auto mt-16">
            <div className="max-w-7xl mx-auto">
                <header className="text-center">
                    <h1 className="font-headline text-5xl font-bold tracking-tight text-primary md:text-7xl">
                    Lexica
                    </h1>
                    <p className="mt-2 text-lg text-muted-foreground">
                    Your AI-powered writing sandbox.
                    </p>
                </header>
                <Form {...form}>
                    <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 mt-8"
                    >
                    <div className="space-y-6">
                        <FormField
                        control={form.control}
                        name="mode"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                            <FormLabel className="text-base font-semibold text-foreground">
                                Select Writing Mode
                            </FormLabel>
                            <FormControl>
                                <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                value={field.value}
                                className="flex flex-col space-y-1 md:flex-row md:space-x-4 md:space-y-0"
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
                                placeholder="Start writing here... Aim for at least 50 characters."
                                className="min-h-[400px] resize-y bg-card p-4 text-base shadow-inner"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full text-lg font-bold shadow-[4px_4px_0px_0px_hsl(var(--primary-foreground))] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:shadow-none"
                        size="lg"
                        >
                        {isLoading && (
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        )}
                        {isLoading ? "Analyzing..." : "Analyze Writing"}
                        </Button>
                    </div>

                    <div className="h-full min-h-[500px] lg:mt-9">
                        <FeedbackPanel result={activeItem?.result || null} isLoading={isLoading} />
                    </div>
                    </form>
                </Form>
            </div>
        </main>
    </div>
  );
}
