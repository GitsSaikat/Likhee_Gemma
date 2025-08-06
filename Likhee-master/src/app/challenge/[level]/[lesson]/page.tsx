import { LevelHeader } from "@/components/likhee/level-header";
import { LikheeEditor } from "@/components/likhee/likhee-editor";
import { levels, Lesson } from "@/lib/levels";
import { notFound } from "next/navigation";

export default function ChallengePage({ params }: { params: { level: string; lesson: string } }) {
  const levelIndex = parseInt(params.level, 10);
  const lessonIndex = parseInt(params.lesson, 10);

  const level = levels[levelIndex];
  if (!level) {
    notFound();
  }

  const lesson = level.lessons[lessonIndex] as Lesson | undefined;
  if (!lesson) {
    notFound();
  }

  return (
    <>
      <LevelHeader />
      <main className="container mx-auto px-4 py-8">
        <LikheeEditor lesson={lesson} />
      </main>
    </>
  );
}

export function generateStaticParams() {
  const paths: { level: string; lesson: string }[] = [];
  levels.forEach((level, levelIndex) => {
    level.lessons.forEach((_, lessonIndex) => {
      paths.push({
        level: levelIndex.toString(),
        lesson: lessonIndex.toString(),
      });
    });
  });
  return paths;
}
