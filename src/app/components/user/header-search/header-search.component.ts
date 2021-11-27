import { UserService } from './../../../services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {


  fullDisplay:boolean=true;

  
  constructor(public router:Router, public userService:UserService) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.userService.logout()
    this.router.navigate(["/login"]);
  }

}
