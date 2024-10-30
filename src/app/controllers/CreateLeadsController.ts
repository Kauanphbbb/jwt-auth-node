import { IController, IResponse } from '../interfaces/IController';

export class CreateLeadsController implements IController {
  async handle(): Promise<IResponse> {
    return {
      body: {
        created: true,
      },
      statusCode: 201,
    };
  }
}
