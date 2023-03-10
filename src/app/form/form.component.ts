import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/model/product';
import {ConsumerService} from "../services/consumer.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  produit!:Product
  constructor(private pr:ProductService,private route:Router,private cons:ConsumerService) { }

  ngOnInit(): void {
    this.produit=new Product
  }
  ajouter(){
    // this.pr.AjouterPro(this.produit)
    // this.route.navigateByUrl("/products")
    this.cons.postProduct(this.produit).subscribe({
      next:()=>this.route.navigateByUrl("/products")
    });
  }

}
