import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length = 128;
  pageSize = 12;
  pageSizeOptions: number[] = [1, 2, 3, 4];


  ngAfterViewInit() {
    this.paginator.page.subscribe(
      (event) => console.log(event)
    );
  }

  ngOnInit(): void {
  }

}
