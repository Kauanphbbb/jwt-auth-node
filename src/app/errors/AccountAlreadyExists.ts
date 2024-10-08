export class AccountAlreadyExists extends Error {
  name = 'AccountAlreadyExists';

  constructor() {
    super('This account already exists');
  }
}
