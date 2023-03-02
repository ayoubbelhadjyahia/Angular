import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  produit!:Product
  constructor(private pr:ProductService,private route:Router) { }

  ngOnInit(): void {
    this.produit=new Product
  }
  ajouter(){
    this.pr.AjouterPro(this.produit)
    this.route.navigateByUrl("/products")
  }

}
