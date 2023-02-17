import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title:string="welcome"
  listeProduct!:Product[];
  priceMax!:number
  constructor() { }

  ngOnInit(): void {
    this.listeProduct=[
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  }
  buy(j:number){
    this.listeProduct[j].quantity --;
  }
  like(j:number){
    this.listeProduct[j].like ++
  }
  

}
