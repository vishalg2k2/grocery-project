import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck{
  isMenuRequire=false;
  //isTenuRequire=false;
  constructor(private router:Router){

  }
  ngDoCheck(): void {
    let currenturl=this.router.url;
    if(currenturl=='/login' || currenturl == '/register'){
      this.isMenuRequire = false;
    }
    else{
      // // if(currenturl == '/')
      // // this.isTenuRequire=false;
      // else
      this.isMenuRequire = true;
    }
  }
}


