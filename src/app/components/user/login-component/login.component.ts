import { UserService } from './../../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credential={
    emailId:"",
    password:""
  }

  wrongCredential:boolean=false

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.credential)
    this.userService.generateToken(this.credential).subscribe((response:any)=>
    {
      console.log(response.token)
      this.userService.loginUser(response.token)
      window.location.href="https://www.google.co.in"
    },
    error=> {console.log(error); this.wrongCredential=true} )
  }
}
