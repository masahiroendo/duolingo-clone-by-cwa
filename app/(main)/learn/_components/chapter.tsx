import { chapters, lessons } from "@/db/schema";
import { ChapterBanner } from "./chapter-banner";
import { LessonButton } from "./lesson-button";

type ChapterProps = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & { completed: boolean })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        chapter: typeof chapters.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
};

export const Chapter = ({
  activeLesson,
  activeLessonPercentage,
  description,
  id,
  lessons,
  order,
  title,
}: ChapterProps) => {
  return (
    <>
      <ChapterBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};
