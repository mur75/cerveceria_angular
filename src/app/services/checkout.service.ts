import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public cartItemListCheckout : any = []
  constructor() { }

  getTotalPrice() : number {
    let grandTotal = 0;
    this.cartItemListCheckout.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
}
