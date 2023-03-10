import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductComponent} from "../product/product.component";
import {Product} from "../core/model/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() p!:Product;
  @Output() incrimentEvent=new EventEmitter<Product>();
  @Output() incrimentBuy=new EventEmitter<Product>();

  constructor() {}
  ngOnInit(): void {}

  sendNotifToProduct() {
    this.incrimentEvent.emit(this.p);
  }
  sendNotifBuy(){
    this.incrimentBuy.emit(this.p);

  }

}
