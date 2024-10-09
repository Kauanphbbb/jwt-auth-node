import { SignUpController } from '../app/controllers/SignUpController';
import { makeSignUpUseCase } from './makeSignUpUseCase';

export function makeSignUpController() {
  return new SignUpController(makeSignUpUseCase());
}
