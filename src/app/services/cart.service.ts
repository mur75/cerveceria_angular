import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cartItemList: any = []
    public productList = new BehaviorSubject<any>([]);

    constructor() { }
    getProducts() {
        return this.productList.asObservable();
    }

    setProduct(product: any) {
        this.cartItemList.push(...product);
        this.productList.next(product);
    }

    addtoCart(product: any) {
        this.cartItemList.push(product);
        this.productList.next(this.cartItemList);
        this.getTotalPrice();
        console.log(this.cartItemList)
    }

    getTotalPrice(): number {
        let grandTotal = 0;
        this.cartItemList.map((a: any) => {
            grandTotal += a.total;
        })
        return grandTotal;
    }

    removeCartItem(product: any) {
        //console.log(this.cartItemList)
        this.cartItemList.map((a: any, index: any) => {
           // console.log(a)
            
        if (product._id === a._id) {
                this.cartItemList.pop(index, 1);
            }
        })
        this.productList.next(this.cartItemList);

    }

    removeAllCart() {
        this.cartItemList = []
        this.productList.next(this.cartItemList);
    }

}
