
"use client";

import { UserStatus } from "./user-status";
import { LifelineManager } from "./lifeline-manager";
import Link from "next/link";
import { Button } from "../ui/button";
import { Home } from "lucide-react";

export function LevelHeader() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex items-center justify-between h-16 px-4">
                 <Link href="/" passHref>
                    <Button variant="ghost">
                        <Home className="mr-2"/>
                        Home
                    </Button>
                </Link>
                <div className="flex items-center gap-4">
                    <UserStatus />
                    <LifelineManager />
                </div>
            </div>
        </div>
    );
}
