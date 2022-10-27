import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class apiService {

    //public cartItemList: any = [];
    //public productList = new BehaviorSubject<any>([]);
    // url = 'http://localhost:4000/api/productos';
    url = 'https://express-cerveceria.herokuapp.com/api/productos';

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<any>("https://fakestoreapi.com/products")
            .pipe(map((res: any) => {
                return res;
            }))
    }

    getProductos(): Observable<any> {
        return this.http.get(this.url);
    }

    /*addToCart (product : any){
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();*/
}
  /*getTotalPrice(){
let grandTotal = 0;
this.cartItemList.map((a:any)=>{
  grandTotal += a.total;
})
}
removeCartItem(product: any){
this.cartItemList.map((a:any, index:any)=>{
  if(product.id === a.id){
    this.cartItemList.splice(index,1);
  }
})
}
removeAllCart(){
this.cartItemList = [];
this.productList.next(this.cartItemList);
}
} */
