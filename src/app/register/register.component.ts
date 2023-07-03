import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private builder:FormBuilder,private toastr:ToastrService, 
    private service:AuthService,private router:Router){

  }

  registerForm=this.builder.group({
    username:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    name:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    gender:this.builder.control('male'),
    role:"unassigned",
    isactive:this.builder.control(false)

  })

  registration(){
    if(this.registerForm.valid){
      this.service.registerData(this.registerForm.value).subscribe(
        (res=>{this.toastr.success('Please Contact Admin for enabling access','Registration Successful');
      this.router.navigate(['login']);
    }))

    }
    else{
      this.toastr.warning('Please Enter Valid Data')
    }
  }

}
