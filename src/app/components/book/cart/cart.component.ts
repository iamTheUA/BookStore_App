import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class CartComponent implements OnInit {

  public Cart: any[] = []
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {

  }
  remove() {

  }
}
