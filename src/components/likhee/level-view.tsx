
"use client";

import { levels } from "@/lib/levels";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CheckCircle2, Lock, PlayCircle, Award, Star, Mountain, Flower, TreePine, GitCommitVertical, LandPlot, Trophy } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Progress } from "../ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as icons from "lucide-react";

const decorativeElements = [
    { icon: TreePine, className: "bottom-0 -left-8 text-green-600/70", size: "w-8 h-8" },
    { icon: Flower, className: "top-0 -right-4 text-pink-400/80", size: "w-6 h-6" },
    { icon: Mountain, className: "bottom-0 -right-10 text-gray-500/60", size: "w-12 h-12" },
    { icon: TreePine, className: "top-4 -left-12 text-green-700/70", size: "w-10 h-10" },
    { icon: LandPlot, className: "bottom-2 -left-6 text-yellow-700/50", size: "w-6 h-6" },
    { icon: Flower, className: "top-8 -right-8 text-red-400/80", size: "w-7 h-7" },
];

export function LevelView() {
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [openLevel, setOpenLevel] = useState<string | undefined>("level-0");

  useEffect(() => {
    const savedProgress = localStorage.getItem("likhee-progress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    const firstUncompleted = levels.findIndex((_, index) => {
        const levelIsUnlocked = isLevelUnlocked(index);
        const levelProgress = getLevelProgress(index);
        return levelIsUnlocked && levelProgress < 100;
    });

    if (firstUncompleted !== -1) {
        setOpenLevel(`level-${firstUncompleted}`);
    } else {
        const lastUnlockedLevel = levels.findIndex((_, index) => !isLevelUnlocked(index+1));
        setOpenLevel(`level-${lastUnlockedLevel !== -1 ? lastUnlockedLevel : levels.length - 1}`);
    }
  }, [progress]);


  const getCompletedLessonsCount = (levelIndex: number) => {
    const level = levels[levelIndex];
    if (!level) return 0;
    return level.lessons.filter((_, lessonIndex) => {
      const lessonKey = `${levelIndex}-${lessonIndex}`;
      return progress[lessonKey];
    }).length;
  }

  const getLevelProgress = (levelIndex: number) => {
    const level = levels[levelIndex];
    if (!level) return 0;
    const completedCount = getCompletedLessonsCount(levelIndex);
    return (completedCount / level.lessons.length) * 100;
  };

  const isLevelUnlocked = (levelIndex: number) => {
    if (levelIndex === 0) return true;
    const prevLevel = levels[levelIndex - 1];
    if (!prevLevel) return false;
    const prevLevelCompletedLessons = getCompletedLessonsCount(levelIndex - 1);
    return (prevLevelCompletedLessons / prevLevel.lessons.length) * 100 >= 60;
  }

  const getLucideIcon = (iconName: string, props?: any) => {
    const IconComponent = (icons as any)[iconName];
    return IconComponent ? <IconComponent {...props} /> : <Star {...props} />;
  }
  
  const getDecorativeElement = (index: number) => {
    const Element = decorativeElements[index % decorativeElements.length];
    const IconComponent = Element.icon;
    return <IconComponent className={cn("absolute", Element.className, Element.size)} />;
  }

  return (
    <div className="w-full max-w-sm mx-auto py-8">
      <Accordion 
        type="single" 
        collapsible 
        className="w-full space-y-0"
        value={openLevel}
        onValueChange={setOpenLevel}
      >
        {levels.map((level, levelIndex) => {
          const unlocked = isLevelUnlocked(levelIndex);
          const levelProgress = getLevelProgress(levelIndex);
          const isCompleted = levelProgress === 100;
          const isCurrent = openLevel === `level-${levelIndex}`;
          const isOdd = levelIndex % 2 !== 0;

          return (
            <AccordionItem 
              value={`level-${levelIndex}`} 
              key={levelIndex} 
              className="border-none"
            >
             <div className={cn("relative flex items-center my-4", isOdd ? "justify-end" : "justify-start")}>
                <div className={cn(
                    "absolute top-full h-16 w-1/2 border-primary border-dashed",
                    isOdd 
                      ? "right-1/2 border-l-8 border-t-8 rounded-tl-3xl -mt-4"
                      : "left-1/2 border-r-8 border-t-8 rounded-tr-3xl -mt-4",
                    levelIndex === levels.length -1 && "hidden"
                )}></div>
                <div className="flex flex-col items-center w-36 relative z-10">
                    <div className="relative">
                         {getDecorativeElement(levelIndex)}
                        <AccordionTrigger 
                            className={cn(
                            "rounded-full w-24 h-24 flex items-center justify-center transition-all duration-300 relative border-4",
                            !unlocked && "border-muted-foreground/30 bg-muted/60 text-muted-foreground/80",
                            unlocked && !isCompleted && "border-primary/50 bg-primary/20 text-primary",
                            isCompleted && "border-green-500/50 bg-green-500/20 text-green-500",
                            isCurrent && "shadow-lg scale-110",
                            "hover:no-underline hover:scale-105"
                            )}
                        >
                            <div className="flex flex-col items-center justify-center">
                            <div className="[&>svg]:w-10 [&>svg]:h-10">
                                {unlocked ? getLucideIcon(level.icon) : <Lock />}
                            </div>
                            {isCompleted && (
                                <CheckCircle2 className="absolute -top-2 -right-2 h-7 w-7 text-white bg-green-500 rounded-full p-1" />
                            )}
                            </div>
                        </AccordionTrigger>
                    </div>

                    <div className="text-center mt-2 w-full px-2">
                      <h3 className="font-bold text-md font-headline">{level.title}</h3>
                      {unlocked && (
                         <div className="mt-1 flex items-center gap-2">
                           <Progress value={levelProgress} className="h-2 bg-muted" />
                           <span className="text-xs font-semibold text-primary">{Math.round(levelProgress)}%</span>
                         </div>
                      )}
                    </div>
                </div>
              </div>

              <AccordionContent className="p-4 bg-card rounded-md my-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {level.lessons.map((lesson, lessonIndex) => {
                      const lessonKey = `${levelIndex}-${lessonIndex}`;
                      const isLessonCompleted = progress[lessonKey];
                      const isLessonLocked = !unlocked;
                      
                      let buttonText = "Start";
                      if (isLessonLocked) buttonText = "Locked";
                      else if (isLessonCompleted) buttonText = "Try Again";


                      return (
                        <Card
                          key={lessonIndex}
                          className={cn(
                            "transition-all flex flex-col",
                             isLessonLocked ? "bg-muted/50" : "hover:shadow-md hover:-translate-y-0.5",
                             isLessonCompleted ? 'border-green-500/50 bg-green-500/5' : 'border-transparent'
                          )}
                        >
                          <CardHeader className="p-4 flex-grow">
                            <div className="flex items-start gap-4">
                               <div className={cn(
                                   "p-2 rounded-full",
                                   isLessonLocked && "bg-muted-foreground/20 text-muted-foreground",
                                   !isLessonLocked && !isLessonCompleted && "bg-primary/20 text-primary",
                                   isLessonCompleted && "bg-green-500/20 text-green-500"
                               )}>
                                  {isLessonLocked ? <Lock className="h-5 w-5"/> : getLucideIcon(lesson.icon, {className: "h-5 w-5"})}
                               </div>
                               <div className="flex-1">
                                 <CardTitle className="text-md">{lesson.title}</CardTitle>
                                 <CardDescription className="text-xs mt-1">
                                   {lesson.description}
                                 </CardDescription>
                               </div>
                                {isLessonCompleted && 
                                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                }
                            </div>
                          </CardHeader>
                          <CardFooter className="p-4 pt-0">
                              <Button asChild className="w-full" disabled={isLessonLocked} size="sm">
                                <Link href={`/challenge/${levelIndex}/${lessonIndex}`}>
                                  {buttonText}
                                </Link>
                              </Button>
                          </CardFooter>
                        </Card>
                      );
                  })}
                  </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <div className="flex justify-center mt-8">
        <Trophy className="w-16 h-16 text-yellow-400" />
      </div>
    </div>
  );
}

