import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  titleService: any;
display= true;
hidden=true;

display1= false;
hidden1=true;

  constructor() { }

  ngOnInit(): void {
  }
  
onClick()
{
  
}


  onClickClear() {
    sessionStorage.clear();
  }
  public setTitle(title: string) {
    this.titleService.setTitle(title);
  }
toggle(){
this.display=!this.display;

}

toggle1(){
  this.display1=!this.display1;
  
  }

}
