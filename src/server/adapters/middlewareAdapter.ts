import { NextFunction, Request, Response } from 'express';
import { IMiddleware } from '../../app/interfaces/IMiddleware';

export function middlewareAdapter(middleware: IMiddleware) {
  return async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const result = await middleware.handle({
        headers: request.headers as Record<string, string>,
      });

      if ('statusCode' in result) {
        response.status(result.statusCode).json(result.body); // Envia a resposta
      } else {
        request.metadata = {
          ...request.metadata,
          ...result.data,
        };
        next(); // Chama o próximo middleware
      }
    } catch (error) {
      next(error); // Encaminha erros para o middleware de erro
    }
  };
}
