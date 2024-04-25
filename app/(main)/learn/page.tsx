import { redirect } from "next/navigation";
import {
  getChapters,
  getCourseProgress,
  getLessonPercentage,
  getUserProgress,
} from "@/db/queries";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { LearnPageHeader } from "./_components/header";
import { UserProgress } from "@/components/user-progress";
import { Chapter } from "./_components/chapter";

const LearnPage = async () => {
  const userProgressPromise = getUserProgress();
  const chaptersPromise = getChapters();
  const courseProgressPromise = getCourseProgress();
  const lessonPercentagePromise = getLessonPercentage();
  const [userProgress, chapters, courseProgress, lessonPercentage] =
    await Promise.all([
      userProgressPromise,
      chaptersPromise,
      courseProgressPromise,
      lessonPercentagePromise,
    ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  if (!courseProgress) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-12 px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <LearnPageHeader title={userProgress.activeCourse.title} />
        {chapters.map((chapter) => (
          <div key={chapter.id} className="mb-10">
            <Chapter
              id={chapter.id}
              order={chapter.order}
              description={chapter.description}
              title={chapter.title}
              lessons={chapter.lessons}
              activeLesson={courseProgress.activeLesson}
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
