import { env } from '@/env';
import userRoute from '@/routes/users';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

// check
app.get('/', (c) => {
  return c.json({
    success: true,
    message: 'Hello from Hono!',
  });
});

// user route
app.route('/api/users', userRoute);

const port = env.PORT || 4000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
