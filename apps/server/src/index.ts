import express from 'express';
import 'dotenv/config';

import { sql } from '@vercel/postgres';

const app = express();
const PORT = process.env.PORT ?? 3003;

app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Hello World!',
    status: 'OK' 
  });
});

app.get('/health', (req, res) => {
  return res.status(200).json({ status: 'OK' });
});

app.get('/create-pets-table', async (req, res) => {
  // https://vercel.com/docs/storage/vercel-postgres/quickstart#create-a-table-in-your-database
  try {
    const result = await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

app.get('/add-pet', async (req, res) => {
  // https://vercel.com/docs/storage/vercel-postgres/quickstart#add-data-to-your-table
  try {
    const petName = req.query.petName as string;
    const ownerName = req.query.ownerName as string;
    if (!petName || !ownerName) throw new Error('Pet and owner names required');
    await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
  } catch (error) {
    return res.status(500).json({ error });
  }

  const pets = await sql`SELECT * FROM Pets;`;
  return res.status(200).json({ pets });
});

app.listen(PORT, () => {
  console.info(`Express running on port: ${PORT}`);
});