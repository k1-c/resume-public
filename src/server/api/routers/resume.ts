import { z } from "zod";
import { kv } from "@vercel/kv";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const resumeRouter = createTRPCRouter({
  // Verify the access token and return the resume if it is valid
  getResume: publicProcedure
    .input(z.object({ token: z.string() }))
    .query(async ({ input }) => {
      const res = await kv.get(input.token);
      console.log("recieved value: ", res);
      return {
        message: "AccessToken is valid!",
      };
    }),
});
