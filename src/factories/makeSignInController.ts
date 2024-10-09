import { SignInController } from '../app/controllers/SignInController';
import { makeSignInUseCase } from './makeSignInUseCase';

export function makeSignInController() {
  return new SignInController(makeSignInUseCase());
}
