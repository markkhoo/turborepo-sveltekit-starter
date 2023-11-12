import express from 'express';
import 'dotenv/config';

import { prisma } from '@repo/db';

const app = express();
const PORT = process.env.PORT ?? 3003;

function generateRandomString(length: number) {
  let result: string = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World!',
    status: 'OK'
  });
});

app.get('/health', (req, res) => {
  return res.status(200).json({ status: 'OK' });
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  return res.status(200).json({ users });
});

app.post('/users', async (req, res) => {
  if (!req.body) return res.status(400).json({ error: 'Missing body' });

  const { name, email } = req.body;

  if (!name || !email) return res.status(400).json({ error: 'Missing name or email' });

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        image: generateRandomString(16)
      }
    });
    return res.status(200).json({ user });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json({ error });
    }
  }
});

app.listen(PORT, () => {
  console.info(`Express running on port: ${PORT}`);
});
