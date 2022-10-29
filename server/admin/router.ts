import { router } from './trpc';
import hello from './controllers/hello';

export const trpcRouter = router({ hello });
export type AppRouter = typeof trpcRouter;
