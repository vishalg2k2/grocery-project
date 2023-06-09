import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData:any;
  constructor(private builder:FormBuilder,private toastr:ToastrService, 
    private service:AuthService,private router:Router){
      sessionStorage.clear();

  }
  
  loginForm=this.builder.group({
    username:this.builder.control('',Validators.required), 
    password:this.builder.control('',Validators.required)

  })

  login(){
    if(this.loginForm.valid){
      this.service.getById(this.loginForm.value.username).subscribe(res=>{
        this.userData=res;
        console.log(this.userData)
        for(const obj of this.userData){
        if(obj.password === this.loginForm.value.password){
          if(obj.isactive){
            sessionStorage.setItem('username',obj.username)
            sessionStorage.setItem('role',obj.role)
            this.router.navigate([''])
          }
          else{
            this.toastr.error('Please Contact Admin for Access','Inactive User!!')
          }
        }
        else{
          this.toastr.error('Invalid Credentials')
        }
      }
      })
    }else{
      this.toastr.warning('Please Enter Valid Data')
    }

  }
}
