import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductComponent} from "../product/product.component";
import {Product} from "../core/model/product";
import {ConsumerService} from "../services/consumer.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() p!:Product;
  @Output() incrimentEvent=new EventEmitter<Product>();
  @Output() incrimentBuy=new EventEmitter<Product>();
  @Output() delete=new EventEmitter<number>();

  constructor(private con:ConsumerService) {}
  ngOnInit(): void {}

  sendNotifToProduct() {
    this.incrimentEvent.emit(this.p);
  }
  sendNotifBuy(){
    this.incrimentBuy.emit(this.p);
  }
  DeleteProduct(){
   this.delete.emit(this.p.id)
  }


}
