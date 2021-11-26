import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

  public Books: any[] = []

  constructor(private bookService: BookService, private routerlink: Router) { }

  ngOnInit(): void {

    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe(
      data => { this.Books = data.data 
      console.log(this.Books)
    })
    }
  

  onClick(n: number) {
    this.routerlink.navigate(["/book-details/" + n])

  }





}
