import { redirect } from "next/navigation";

import { getLesson, getUserProgress } from "@/db/queries";
import { Quiz } from "../_components/quiz";

type LessonIdPageProps = {
  params: { lessonId: number };
};

const LessonIdPage = async ({ params }: LessonIdPageProps) => {
  const lessonPromise = getLesson(params.lessonId);
  const userProgressPromise = getUserProgress();
  const [lesson, userProgress] = await Promise.all([
    lessonPromise,
    userProgressPromise,
  ]);
  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const completedChallenges = lesson.challenges.filter(
    (challenge) => challenge.completed
  );

  const initialPercentage =
    (completedChallenges.length / lesson.challenges.length) * 100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={null}
    />
  );
};

export default LessonIdPage;
