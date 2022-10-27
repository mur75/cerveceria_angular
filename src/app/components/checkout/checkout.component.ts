import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import {informacionFacturacion} from 'src/app/models/checkout'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  datosEnvioForm: FormGroup;
  regexCorreo= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  public products : any = [];
  public grandTotal !: number;

  constructor(private cartService : CartService, private fb : FormBuilder   ) {

    this.datosEnvioForm = this.fb.group({
        nombreApellido : ['', Validators.required], 
        identificacion : ['', Validators.required], 
        direccionCiudad : ['', Validators.required], 
        departamento : ['', Validators.required], 
        telefono : ['', Validators.required], 
        email : ['', Validators.pattern(this.regexCorreo)]
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
    console.log(this.datosEnvioForm);

    console.log(this.datosEnvioForm.get('telefono')?.value);

    const DATA_ENVIARINFO : informacionFacturacion ={
      nombreApellido : this.datosEnvioForm.get('nombreApellido')?.value, 
      identificacion : this.datosEnvioForm.get('identificacion')?.value, 
      direccionCiudad : this.datosEnvioForm.get('direccionCiudad')?.value, 
      departamento : this.datosEnvioForm.get('departamento')?.value, 
      telefono : this.datosEnvioForm.get('telefono')?.value,
      email : this.datosEnvioForm.get('email')?.value,
    }

    Swal.fire({
      title: 'Gracias Por tu compra. Estamos procesando tu Pedido',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  

}
function emptyCart() {
  throw new Error('Function not implemented.');
}

