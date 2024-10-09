import express from 'express';
import { env } from '../app/config/env';
import { makeSignInController } from '../factories/makeSignInController';
import { makeSignUpController } from '../factories/makeSignUpController';
import { routeAdapter } from './adapters/routeAdapter';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/sign-up', routeAdapter(makeSignUpController()));

app.post('/sign-in', routeAdapter(makeSignInController()));

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
