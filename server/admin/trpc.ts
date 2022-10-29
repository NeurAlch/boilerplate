import { initTRPC } from '@trpc/server';

const trpc = initTRPC.create();
const publicProcedure = trpc.procedure;
const router = trpc.router;

export { publicProcedure, router, trpc };
