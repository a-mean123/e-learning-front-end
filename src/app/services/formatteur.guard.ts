import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FormatteurGuard implements CanActivate {
  constructor(private _authService: AuthService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this._authService.loggedIn()) {
     
      if(this._authService.getUserData().Role == "prof"){
        console.log('true');
        return true
      }
     
    } else {
      console.log('false')
      this._router.navigate(['/login']);
      return false
    }
  }
}
