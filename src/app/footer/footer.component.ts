import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements DoCheck{
  isMenuRequire=false;
  isTenuRequire=true;
  isAdmin=false;
  constructor(private router:Router,private service:AuthService){

  }
  ngDoCheck(): void {
    let currenturl=this.router.url;
    if(currenturl=='/login' || currenturl == '/register'){
      this.isMenuRequire = false;
    }
    else{
      if(currenturl == '')
      this.isTenuRequire=false;
      else
      this.isMenuRequire=true;
    }
  }

}
