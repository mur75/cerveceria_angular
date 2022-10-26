import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  datosEnvioForm: FormGroup;

  public products : any = [];
  public grandTotal !: number;

  constructor(private cartService : CartService, private fb : FormBuilder   ) {

    this.datosEnvioForm = this.fb.group({
        nombreApellido : ['', Validators.required], 
        identificacion : ['', Validators.required], 
        direccionCiudad : ['', Validators.required], 
        departamento : ['', Validators.required], 
        telefono : ['', Validators.required], 
        email : ['', Validators.required]
        //total : ['', Validators.required] 
      })

   }
  
  

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  agregarInformacion(){
    console.log(this.datosEnvioForm)
  }
  

}
