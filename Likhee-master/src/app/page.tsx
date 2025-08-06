
import { LevelView } from "@/components/likhee/level-view";
import { Button } from "@/components/ui/button";
import { BookOpen, Gamepad2 } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import TypingHeading from "@/components/common/typing-heading";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12 flex flex-col items-center">
        <Image
          src="/images/Likhee_logo.png"
          alt="Likhee Logo"
          width={280}
          height={100}
          priority
        />
        <div className="mt-4 h-8 flex items-center justify-center">
          <TypingHeading
            text="Write Spontaneously."
            className="text-lg text-muted-foreground font-bold"
          />
        </div>
      </header>

      <Tabs defaultValue="levels" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-auto">
          <TabsTrigger value="levels" className="py-2">
            <BookOpen className="mr-2"/>
            Learn
            </TabsTrigger>
          <TabsTrigger value="play" className="py-2">
            <Gamepad2 className="mr-2"/>
            Play
            </TabsTrigger>
        </TabsList>
        <TabsContent value="levels" className="mt-8">
           <LevelView />
        </TabsContent>
        <TabsContent value="play" className="mt-8 flex justify-center">
            <Card className="w-full max-w-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-headline">Playground</CardTitle>
                <CardDescription>
                  Your open sandbox for writing practice. Write anything, select a mode, and get instant AI-powered feedback.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                 <Link href="/playground" passHref>
                    <Button size="lg">
                        Start Writing
                    </Button>
                </Link>
              </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
