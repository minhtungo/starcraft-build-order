import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const buildsRouter = createTRPCRouter({
  createBuild: publicProcedure
    .input(z.object({ matchUp: z.string(), buildOrder: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const build = await ctx.prisma.buildOrder.create({
        data: {
          ...input,
        },
      });

      return build;
    }),

  getBuilds: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.buildOrder.findMany();
  }),
  getBuildsByMatchUp: publicProcedure
    .input(z.object({ matchUp: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.buildOrder.findMany({
        where: {
          matchUp: input.matchUp,
        },
      });
    }),
});
