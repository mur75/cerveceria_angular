import { SlicePipe } from '@angular/common';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DescriocionIndividualService } from 'src/app/services/descriocion-individual.service';

@Component({
  selector: 'app-viewindividualproduct',
  templateUrl: './viewindividualproduct.component.html',
  styleUrls: ['./viewindividualproduct.component.css']
})
export class ViewindividualproductComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  constructor(private descIndividualProducto : DescriocionIndividualService, private cartService: CartService ) { }
  
  ngOnInit(): void {
    this.descIndividualProducto.getProductsIndividual()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.descIndividualProducto.getTotalPriceIndividual();
    })
  }
  removeItem(item: any){
    this.descIndividualProducto.removeCartItemIndividual(item);
  }
  emptyCart(){
    this.descIndividualProducto.removeAllCartIndividual();
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

  /*ngOnInit(): void {
    this.descIndividualProducto.envioDatoDesdePaksDescripion.subscribe( item =>{
      console.log('recibiendo data....', item);
      this.products.push(item)
    })
  }*/

}
