import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck,OnInit{
  isMenuRequire=false;
  isTenuRequire=true;
  isAdmin=false;
  constructor(private router:Router,private service:AuthService){

  }
  ngOnInit(): void {}
  id:any;
  drop(value: any) {
        if (this.id == value) {
            this.id = "";
        }
        else {
            this.id = value;
        }
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
    if(this.service.getUserRole()==='admin'){
      this.isAdmin=true;
    }
    else{
      this.isAdmin=false;
    }
  }

}


