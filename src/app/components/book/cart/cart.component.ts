import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class CartComponent implements OnInit {

  public cartlist: any[] = []

  public totalPrice:number=0;
  public markedPrice:number=0;
  
  public addressAllowed=false;


  constructor(public bookService:BookService, public router:Router) { 
  }


  ngOnInit(): void {
    this.bookService.getCartlist().subscribe((n:any)=>{this.cartlist=n.data
    for(let book of this.cartlist){
      this.totalPrice = this.totalPrice + (book.quantity*book.book.price);
      this.markedPrice = this.markedPrice + (book.quantity*book.book.markedPrice);
      console.log("onit");
      console.log(this.markedPrice);
    }});
  }

  reload(){
    this.bookService.getCartlist().subscribe((n:any)=>{this.cartlist=n.data
      for(let book of this.cartlist){
        this.totalPrice = this.totalPrice + (book.quantity*book.book.price);
        this.markedPrice = this.markedPrice + (book.quantity*book.book.markedPrice);
        console.log("onit");
        console.log(this.markedPrice);
      }});
  }

  remove(bookId:number) {
    this.bookService.removeFromCart(bookId, 0).subscribe(n=>this.reload());
   
  }

  removeOneBook(bookId:number, bookQunatity:number){
    this.bookService.removeFromCart(bookId, (bookQunatity-1)).subscribe(n=>{this.reload(); console.log(bookQunatity-1)});

  }

  addOneBook(bookId:number, bookQunatity:number){
    this.bookService.addToCart(bookId, bookQunatity+1).subscribe(n=>{this.reload(); console.log(bookQunatity+1)});
    
  }


  placeOrder(){
    this.bookService.placeOrder().subscribe(n=>console.log("orderPlaced!"));
    this.router.navigate(["/greeting"]);
  }

  changeAddressAllowed(){
    this.addressAllowed=true;
  }
}
