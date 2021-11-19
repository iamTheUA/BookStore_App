import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }


  generateToken(credentials:any){
    return this.http.post(this.baseUrl+"/token", credentials)
  }

  loginUser(token:any){
    localStorage.setItem("token", token)
    return true
  }

  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==null || token===""){
      return false;
    }else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem("token")
    return true;
  }

  getToken(){
    return localStorage.getItem("token")
  }
}
