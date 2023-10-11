import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT ?? 3003;

app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Hello World!',
    status: 'OK' 
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.info(`Express running on port: ${PORT}`);
});