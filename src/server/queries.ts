import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  return await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
}
