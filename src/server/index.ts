import { publicProcedure, router } from "./trpc";
import { prisma } from "@lib/prisma";

export const appRouter = router({
  getFeedback: publicProcedure.query(async () => {
    return await prisma.feedback.findMany({
      include: {
        tags: true,
      }
    });
  })
});

export type AppRouter = typeof appRouter;