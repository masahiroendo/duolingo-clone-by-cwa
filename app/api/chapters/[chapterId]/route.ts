import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import db from "@/db/drizzle";
import { chapters } from "@/db/schema";
import { isAdmin } from "@/lib/admin";

export async function GET(
  req: Request,
  { params }: { params: { chapterId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 403 });

  const data = await db.query.chapters.findFirst({
    where: eq(chapters.id, params.chapterId),
  });

  return NextResponse.json(data);
}

export async function PUT(
  req: Request,
  { params }: { params: { chapterId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 403 });

  const body = await req.json();
  const data = await db
    .update(chapters)
    .set({ ...body })
    .where(eq(chapters.id, params.chapterId))
    .returning();

  return NextResponse.json(data[0]);
}

export async function DELETE(
  req: Request,
  { params }: { params: { chapterId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 403 });

  const data = await db
    .delete(chapters)
    .where(eq(chapters.id, params.chapterId))
    .returning();

  return NextResponse.json(data[0]);
}
