import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Hello World!',
    status: 'OK' 
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(3003, () => {
  console.info(`Express running on port: ${3003}`);
});