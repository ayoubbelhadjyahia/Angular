import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title:string="welcome"
  listeProduct!:Product[];
  priceMax!:number;
  alertStock!:number;
  constructor(private ProductServ:ProductService,private Calcul:CalculService) { }

  ngOnInit(): void {
    this.listeProduct=this.ProductServ.products;
    this.alertStock=this.Calcul.getNumberOf(this.listeProduct,"quantity",0);

  }
  buy(product:Product){
    let j =this.listeProduct.indexOf(product)
    this.listeProduct[j].quantity --;
  }
  like(product:Product){
    let j =this.listeProduct.indexOf(product)
    this.listeProduct[j].like ++;
  }



}
