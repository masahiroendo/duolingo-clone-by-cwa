import { getCourses } from "@/db/queries";
import { CoursesList } from "./_components/list";

const CoursesPage = async () => {
  const courses = await getCourses();
  return (
    <div className="h-full max-w-5xl px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <CoursesList courses={courses} activeCourseId={1} />
    </div>
  );
};

export default CoursesPage;
