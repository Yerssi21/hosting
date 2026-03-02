import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const roleGuard = (expectedRole: string): CanActivateFn => {

  return () => {

    const tokenService = inject(TokenService);
    const router = inject(Router);

    const role = tokenService.getUserRole();

    if (role === expectedRole) {
      return true;
    }

    router.navigate(['/home']);
    return false;
  };
};