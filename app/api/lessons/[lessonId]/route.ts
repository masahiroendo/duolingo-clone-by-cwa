import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import db from "@/db/drizzle";
import { lessons } from "@/db/schema";
import { isAdmin } from "@/lib/admin";

export async function GET(
  req: Request,
  { params }: { params: { lessonId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 403 });

  const data = await db.query.lessons.findFirst({
    where: eq(lessons.id, params.lessonId),
  });

  return NextResponse.json(data);
}

export async function PUT(
  req: Request,
  { params }: { params: { lessonId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 403 });

  const body = await req.json();
  const data = await db
    .update(lessons)
    .set({ ...body })
    .where(eq(lessons.id, params.lessonId))
    .returning();

  return NextResponse.json(data[0]);
}

export async function DELETE(
  req: Request,
  { params }: { params: { lessonId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 403 });

  const data = await db
    .delete(lessons)
    .where(eq(lessons.id, params.lessonId))
    .returning();

  return NextResponse.json(data[0]);
}
