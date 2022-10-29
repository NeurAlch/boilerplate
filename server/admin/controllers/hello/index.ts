import { z } from 'zod';
import { publicProcedure, router } from '../../trpc';

const hello = router({
  greeting: publicProcedure.input(z.object({ name: z.string() }).nullish()).query(({ input }) => {
    return `Hello ${input?.name ?? 'World'}`;
  }),
});

export default hello;
