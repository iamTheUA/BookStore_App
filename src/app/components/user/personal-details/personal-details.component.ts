import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';


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
    type: 1
  }

  usermodel = {
    fullName: '',
    emailId: '',
    password: '',
    phoneNumber: 0
  }

  token = localStorage.getItem("token")
  newPassword: any = null;

  titleService: any;
  display = false;
  hidden = true;
  display1 = false;
  hidden1 = true;

  constructor(private service: UserService,) { }

  ngOnInit(): void {
    this.getUserAddress();
    this.getUserPersonDetails();

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
    this.service.getuserAddress(this.addressmodel.type).subscribe(
      data => {
        if (data != null) {
          this.addressmodel = data.data
          console.log(this.addressmodel)
        }
        else {
          this.addressmodel = {
            name: '',
            pincode: '',
            locality: '',
            address: '',
            city: '',
            landmark: '',
            type: 0
          }
        }

      }

    )

  }
  getUserPersonDetails() {

    this.service.getUserByToken().subscribe(
      data => {
        if (data != null) {
          this.usermodel = data.data;
          console.log(this.usermodel)
        }
        else {
          console.log("No Data")
        }
      }
    )
  }

  onSumbitForPassword() {
    if (this.token != null) {
      this.service.passwordReset(this.token, this.usermodel.password).subscribe(

      )
      console.log(this.usermodel.password);
    }

  }




}
