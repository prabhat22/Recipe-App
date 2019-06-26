import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private authService:AuthService){}
    canActivate(activeroute:ActivatedRouteSnapshot,state:RouterStateSnapshot)
    {
       return this.authService.isAuthenticated();
    }
}