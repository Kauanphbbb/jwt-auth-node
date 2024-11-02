import { AuthorizationMiddleware } from '../app/middlewares/AuthorizationMiddleware';
import { makeGetRolePermissionsUseCase } from './makeGetRolePermissionsUseCase';

export function makeAuthorizationMiddleware(requiredPermissions: string[]) {
  return new AuthorizationMiddleware(
    requiredPermissions,
    makeGetRolePermissionsUseCase()
  );
}
