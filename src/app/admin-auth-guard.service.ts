import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
//import 'rxjs/add/operator/switchMap'
//import 'rxjs/add/operator/map';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { AppUser } from './models/app-user';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private auth: AuthService,private userService: UserService) { }

  canActivate(): Observable<boolean>{
    return this.auth.appUser$.pipe(map(appUser => appUser.isAdmin));
  }

}
