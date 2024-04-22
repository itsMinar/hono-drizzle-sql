import { db } from '@/db';
import { users } from '@/db/schema';
import { Hono } from 'hono';

const userRoute = new Hono();

// get all users
userRoute.get('/', async (c) => {
  try {
    const allUsers = await db.select().from(users);

    return c.json({
      success: true,
      allUsers,
    });
  } catch (error: any) {
    return c.json({
      success: false,
      message: error.message,
    });
  }
});

// create new user
userRoute.post('/', async (c) => {
  const { name, email } = await c.req.json();

  try {
    const newUser = await db.insert(users).values({ name, email }).returning();

    return c.json(
      {
        success: true,
        message: 'User Created Successfully!',
        newUser,
      },
      201
    );
  } catch (error: any) {
    return c.json(
      {
        success: false,
        message: error.message,
      },
      409
    );
  }
});

export default userRoute;
