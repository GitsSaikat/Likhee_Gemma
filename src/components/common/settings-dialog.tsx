
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApiKey } from "@/hooks/use-api-key";
import { Settings } from "lucide-react";
import { useState, useEffect } from "react";

export function SettingsDialog() {
  const { apiKey, setApiKey } = useApiKey();
  const [currentKey, setCurrentKey] = useState(apiKey || "");

  useEffect(() => {
    setCurrentKey(apiKey || "");
  }, [apiKey]);

  const handleSave = () => {
    setApiKey(currentKey);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            If you are running into API rate limits, you can provide your own Google AI API key here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="api-key" className="text-right">
              API Key
            </Label>
            <Input
              id="api-key"
              value={currentKey}
              onChange={(e) => setCurrentKey(e.target.value)}
              className="col-span-3"
              placeholder="Enter your Google AI API key"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={handleSave}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
