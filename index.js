import express from 'express';
import router from './server/server.js';
import {
  logErrors,
  boomErrorHandler,
  errorHandler,
} from './middlewares/errors.handler.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, this is an API made with Express.js');
});

router(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server runing on: http://localhost:${port}`);
});
