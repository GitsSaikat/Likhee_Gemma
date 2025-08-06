
"use client";

import type { LexicaHistoryItem } from "./lexica-editor";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { PlusCircle, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ChatHistorySidebarProps {
  history: LexicaHistoryItem[];
  activeItemId?: string | null;
  onSelectHistory: (item: LexicaHistoryItem) => void;
  onClearHistory: () => void;
  onNewChat: () => void;
}

export function ChatHistorySidebar({
  history,
  activeItemId,
  onSelectHistory,
  onClearHistory,
  onNewChat
}: ChatHistorySidebarProps) {
  return (
    <aside className="w-64 flex-shrink-0 border-r bg-muted/40 flex flex-col h-full">
      <div className="p-4 flex items-center justify-between border-b">
        <h2 className="text-lg font-semibold font-headline">History</h2>
        <Button variant="ghost" size="icon" onClick={onNewChat}>
            <PlusCircle />
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {history.length === 0 && (
            <p className="p-4 text-sm text-center text-muted-foreground">
              No history yet. Your analyses will appear here.
            </p>
          )}
          {history.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectHistory(item)}
              className={cn(
                "w-full text-left p-2 rounded-md truncate text-sm transition-colors",
                activeItemId === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              )}
            >
              {item.text}
            </button>
          ))}
        </div>
      </ScrollArea>
      {history.length > 0 && (
        <div className="p-4 border-t">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="w-full">
                <Trash2 className="mr-2" />
                Clear History
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete your entire Lexica chat history. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onClearHistory} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </aside>
  );
}
