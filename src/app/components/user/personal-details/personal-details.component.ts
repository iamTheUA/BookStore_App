import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addressModel } from 'src/app/model/addressmode';
import { UserService } from 'src/app/services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  addressmodel = {
    name: '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    landmark: '',
    type: 0
  }
  titleService: any;
  display = true;
  hidden = true;
  display1 = false;
  hidden1 = true;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getUserAddress();
  }

  onClickClear() {
    sessionStorage.clear();
  }
  public setTitle(title: string) {
    this.titleService.setTitle(title);
  }
  toggle() {
    this.display = !this.display;

  }

  toggle1() {
    this.display1 = !this.display1;

  }
  onClickAddMyAddress() {
    console.log(this.addressmodel)
    this.service.userAddress(this.addressmodel).subscribe(
      n => {
        console.log(n);


      }

    )

  }

  getUserAddress() {
    this.service.getuserAddress(1).subscribe(

    )

  }

}
