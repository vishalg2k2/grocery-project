import { CanActivate, Router ,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Injectable({
   providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private builder:FormBuilder,private toastr:ToastrService, 
    private service:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.service.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login'])
      return false;
    }
}
}
