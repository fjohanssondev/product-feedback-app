import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

const isAuthed = t.middleware(({ ctx, next }) => {
  return next();
});

export const router = t.router;
export const publicProcedure = t.procedure;