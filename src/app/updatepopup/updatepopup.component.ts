import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {
  
  // constructor(private builder:FormBuilder){

  // }
  // registerForm=this.builder.group({
  //   id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
  //   name:this.builder.control('',Validators.required),
  //   password:this.builder.control('',Validators.compose([Validators.required,
  //   Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
  //   email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
  //   Gender:this.builder.control('male'),
  //   role:this.builder.control(''),
  //   isactive:this.builder.control(false)

  // })
  ngOnInit(): void {
   
  }
  
  // updateUser(){

  // }
}
