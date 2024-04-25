import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });
const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.chapters);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Russian",
        imageSrc: "/ru.svg",
      },
      {
        id: 2,
        title: "Chinese",
        imageSrc: "/cn.svg",
      },
      {
        id: 3,
        title: "Iranian",
        imageSrc: "/ir.svg",
      },
      {
        id: 4,
        title: "Arabic",
        imageSrc: "/tn.svg",
      },
      {
        id: 5,
        title: "Japanese",
        imageSrc: "/jp.svg",
      },
      {
        id: 6,
        title: "Korean",
        imageSrc: "/kr.svg",
      },
    ]);

    await db.insert(schema.chapters).values([
      {
        id: 1,
        courseId: 1, //Russian
        title: "Chapter 1",
        description: "Learn the basics of Russian",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        chapterId: 1, // Chapter 1 (Learn the basics of Russian)
        order: 1,
        title: "Nouns",
      },
      {
        id: 2,
        chapterId: 1, // Chapter 1 (Learn the basics of Russian)
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        chapterId: 1, // Chapter 1 (Learn the basics of Russian)
        order: 3,
        title: "Verbs",
      },
      {
        id: 4,
        chapterId: 1, // Chapter 1 (Learn the basics of Russian)
        order: 4,
        title: "Verbs",
      },
      {
        id: 5,
        chapterId: 1, // Chapter 1 (Learn the basics of Russian)
        order: 5,
        title: "Verbs",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 1,
        question: 'Which on of these is the "man"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1, // Which one of these is the "man"?
        imageSrc: "/man.svg",
        correct: true,
        text: "мужчина",
        audioSrc: "/ru_man.mp3",
      },
      {
        id: 2,
        challengeId: 1, // Which one of these is the "man"?
        imageSrc: "/woman.svg",
        correct: false,
        text: "женщины",
        audioSrc: "/ru_woman.mp3",
      },
      {
        id: 3,
        challengeId: 1, // Which one of these is the "man"?
        imageSrc: "/robot.svg",
        correct: false,
        text: "робот",
        audioSrc: "/ru_robot.mp3",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    throw new Error("Failed to seed the database");
  }
};

main();
