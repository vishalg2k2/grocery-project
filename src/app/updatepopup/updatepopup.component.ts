import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {
  rolelist:any;
  editData:any;
  constructor(private builder:FormBuilder,private service:AuthService,private toastr:ToastrService,
    private dialogref:MatDialogRef<UpdatepopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any){}
      
    
      ngOnInit(): void {
        this.service.getALLRole().subscribe(res=>{
          this.rolelist=res;
       })
       if(this.data.usercode !=null && this.data.usercode !=''){
         this.loaduserdata(this.data.usercode);
         
      }
      
    }

  registerForm=this.builder.group({
    id:this.builder.control(''),
    name:this.builder.control(''),
    password:this.builder.control(''),
    email:this.builder.control(''),
    Gender:this.builder.control(''),
    role:this.builder.control('',Validators.required),
    isactive:this.builder.control(false)

  })
  loaduserdata(code:any){
    this.service.getById(code).subscribe(res=> {
      this.editData=res;
      console.log(this.editData);
        this.registerForm.setValue({
        id:this.editData.id, name: this.editData.name,password:this.editData.password,
        email:this.editData.email,Gender:this.editData.Gender,
        role:this.editData.role,isactive:this.editData.isactive

        });
      })
    }
     
  updateUser(){
    this.service.updateData(this.registerForm.value.id,this.registerForm.value).subscribe(res=>{
    this.toastr.success("Update successful");
   
    this.dialogref.close();
    //console.log(res);
    })

  }
}
