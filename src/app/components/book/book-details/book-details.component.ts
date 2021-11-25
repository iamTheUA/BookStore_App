import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  
  bookId:number=0;
  book:any=null;

  constructor(public bookService:BookService, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((n:ParamMap) => 
      { let m=n.get("bookId");
        if(m!=null)
          this.bookId = parseInt(m)
      }) 
    this.bookService.getBookById(this.bookId).subscribe(book=> {this.book=book.data; console.log(this.book)})  
            
    }

      
    
}
