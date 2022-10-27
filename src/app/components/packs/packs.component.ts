import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { DescriocionIndividualService } from 'src/app/services/descriocion-individual.service';
import { CartComponent } from '../cart/cart.component';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-packs',
    templateUrl: './packs.component.html',
    styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit {

    public productList: any;


    constructor(private api: apiService, private cartService: CartService, private descIndividualProducto: DescriocionIndividualService) {

    }

    ngOnInit(): void {
        this.api.getProductos()
            .subscribe(res => {
                this.productList = res;
                this.productList.forEach((a: any) => {
                    Object.assign(a, { quantity: 1, total: a.precio });
                });
            })
    }

    addtocart(item: any) {
        this.cartService.addtoCart(item);
        Swal.fire({
            icon: 'success',
            title: 'Disfrutala 🍻',
            text: 'Producto agregado correctamente'
        })
    }
    descProducto(item: any) {
        //console.log(this.productList)
        this.descIndividualProducto.envioDatoDesdePaksDescripion.emit({
            item
        })
    }

    addtoIndividual(item: any) {
        this.descIndividualProducto.addtoCartIndividual(item);
    }
}
  //productoForm: FormGroup;

/* constructor( private fb:FormBuilder) {
   this.productoForm = this.fb.group({
     imagen:['', Validators.required],
     nombre:['', Validators.required],
     medida:['', Validators.required],
     porcAlcohol:['', Validators.required],
     tipo:['', Validators.required],
     precio:['', Validators.required],
   })
  }*/

/* ngOnInit(): void {
 }
 agregarProductoCarrito(){
   console.log(this.agregarProductoCarrito)
 }*/





