"use client";

import { courses } from "@/db/schema";
import { Card } from "./card";

type CoursesListProps = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: number;
};

export const CoursesList = ({ activeCourseId, courses }: CoursesListProps) => {
  return (
    <div className="pt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
