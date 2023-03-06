import express from 'express';
import cors from 'cors';
import router from './server/server.js';
import {
  boomErrorHandler,
  errorHandler,
} from './middlewares/errors.handler.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
  res.send('Hello, this is an API made with Express.js');
});

router(app);

app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(3002);

export default app;
