import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../core/model/product";

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http:HttpClient) { }

  getProduct(){
   return this.http.get<Product[]>("http://localhost:3000/Products");

  }
  postProduct(product: Product){
    return this.http.post("http://localhost:3000/Products",product);
  }
  DeleteProduct(productId :number){
    return this.http.delete("http://localhost:3000/Products/"+ productId);

}
}
