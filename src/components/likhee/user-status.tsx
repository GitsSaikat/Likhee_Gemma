
"use client";

import { useUser } from "@/hooks/use-user";
import { Gem, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface UserStatusProps {
    showXp?: boolean;
    showHomeButton?: boolean;
}

export function UserStatus({ showXp = true, showHomeButton = false }: UserStatusProps) {
  const { xp } = useUser();

  if (showHomeButton) {
      return (
        <Link href="/" passHref>
            <Button variant="ghost">
                <Home className="mr-2"/>
                Home
            </Button>
        </Link>
      )
  }

  return (
    <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-full bg-card/80 p-2 px-4 shadow-lg backdrop-blur-sm">
            <p className="font-bold text-sm">Guest</p>
        </div>
        {showXp && (
            <div className="flex items-center gap-2 rounded-full bg-card/80 p-2 px-4 shadow-lg backdrop-blur-sm">
                <Gem className="h-6 w-6 text-blue-500" />
                <p className="font-bold text-lg">{xp}</p>
            </div>
        )}
    </div>
  );
}
