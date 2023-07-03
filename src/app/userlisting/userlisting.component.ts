import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {
  constructor(private service:AuthService,private dialog:MatDialog){
    this.loadUser();

  }
  userList:any;
  dataSource:any;
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  //@ViewChild(MatSort) sort !:MatSort;

  displayedColumns:string[]=['username','name','email','role','status','action'];
  loadUser(){
    this.service.getAll().subscribe(res=>{
       this.userList =res;
       this.dataSource=new MatTableDataSource(this.userList);
       this.dataSource.paginator = this.paginator; 
       //this.dataSource.sort=this.sort;
    })
  }
  updateuser(code:any){
    this.openDialog('1000ms','600ms',code)
  }

  openDialog(enteranimation:any,exitanimation:any,code:string){
    const popup = this.dialog.open(UpdatepopupComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:'20%',
      data:{
        usercode:code
      }
    });
    popup.afterClosed().subscribe(res=>{
      this.loadUser()

    })

  }


}
