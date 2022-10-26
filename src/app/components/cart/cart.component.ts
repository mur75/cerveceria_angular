import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { DescriocionIndividualService } from 'src/app/services/descriocion-individual.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  constructor(private cartService : CartService ){}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
    Swal.fire({
        icon: 'error',
        title: '😭😭😭😭',
        text: 'Producto borrado correctamente :('
    })
  }
  emptyCart(){
    this.cartService.removeAllCart();
    Swal.fire({
        icon: 'error',
        title: '😭😭😭😭',
        text: 'Producto borrado correctamente :('
    })
  }
}
