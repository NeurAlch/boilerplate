import { join } from 'path';
import * as express from 'express';
import { trpcRouter } from './router';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

const app = express();

app.use('/public', express.static(join(__dirname, './public')));
app.get('/', (req, res) => res.sendFile(join(__dirname, './public/index.html')));
app.use(
  '/trpc',
  createExpressMiddleware({
    router: trpcRouter,
    createContext: () => ({}),
  }),
);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
