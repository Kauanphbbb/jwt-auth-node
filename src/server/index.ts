import express from 'express';
import { env } from '../app/config/env';
import { makeSignInController } from '../factories/makeSignInController';
import { makeSignUpController } from '../factories/makeSignUpController';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/sign-up', async (req, res) => {
  const signUpUseController = makeSignUpController();

  const { statusCode, body } = await signUpUseController.handle({
    body: req.body,
  });

  res.status(statusCode).json(body);
});

app.post('/sign-in', async (req, res) => {
  const signInController = makeSignInController();

  const { statusCode, body } = await signInController.handle({
    body: req.body,
  });

  res.status(statusCode).json(body);
});

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
