import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseAPI='http://127.0.0.1:8000/groc/create_user'
  usersAPI='http://127.0.0.1:8000/groc/getUsers'
  loginUrl='http://127.0.0.1:8000/groc/getUserByUsername/'
  constructor(private http:HttpClient) {
   }

   getUserId(){
    return sessionStorage.getItem('username');
   }

   getAll(){
    return this.http.get(this.usersAPI);
   }
   getALLRole(){
    return this.http.get("http://localhost:3000/role");
   }
   getById(id:any){
    return this.http.get(this.loginUrl+id);
   }

   registerData(inputdata:any){
    console.log(inputdata)

    return this.http.post(this.baseAPI,inputdata);
   }

   updateData(id:any,inputdata:any){
    return this.http.put(this.baseAPI+'/'+id,inputdata);
   }
   
   isLoggedIn(){
    return sessionStorage.getItem('username')!=null;
   }

   getUserRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
   }

  //  getUserbyCode(){
    
  //  }

}
