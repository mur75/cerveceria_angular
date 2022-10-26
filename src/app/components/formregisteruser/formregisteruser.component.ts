import { Component, ElementRef, OnInit, ViewChild, Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { registrarusuario } from 'src/app/models/registrarusuario';


@Component({
  selector: 'app-formregisteruser',
  templateUrl: './formregisteruser.component.html',
  styleUrls: ['./formregisteruser.component.css']
})
export class FormregisteruserComponent implements OnInit {

    @ViewChild('btninfoClub') btndesplegarInfo?:ElementRef
    @ViewChild('btnOcultar') btnOcultarForm?:ElementRef
    @ViewChild('formClub') segundofromulario?:ElementRef
//pepe

  registerUser: FormGroup
  regexNumero = /^[0-9]+$/;
  regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
  /*Ejemplo: w3Unpocodet0d0 */

  regexCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

  constructor(private fb: FormBuilder, private renderer2: Renderer2) {

    this.registerUser = this.fb.group({

      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      correo: ["", [Validators.required, Validators.pattern(this.regexCorreo)]],
      instagram: ["", Validators.required],
      club: ["", Validators.required],
      ciudad: [""],
      direccion: [""],
      complementoDireccion: [""],
      telefono: ["", Validators.pattern(this.regexNumero)],
      tipoId: [""],
      numeroId: ["", Validators.pattern(this.regexNumero)],
      password: ["", Validators.pattern(this.regexPassword)],
      Verificarpassword: ["", Validators.pattern(this.regexPassword)],
      alias: [""]

    })
  }

  ngOnInit(): void {
  }

  guardarUsuario() {
    const NUEVOUSUARIO: registrarusuario = {
      nombre: this.registerUser.get('nombre')?.value,
      apellido: this.registerUser.get('apellido')?.value,
      correo: this.registerUser.get('correo')?.value,
      instagram: this.registerUser.get('instagram')?.value,
      club: this.registerUser.get('club')?.value,
      ciudad: this.registerUser.get('ciudad')?.value,
      direccion: this.registerUser.get('direccion')?.value,
      complementoDireccion: this.registerUser.get('complemento')?.value,
      telefono: this.registerUser.get('telefono')?.value,
      tipoId: this.registerUser.get('tipo')?.value,
      numeroId: this.registerUser.get('numero')?.value,
      password: this.registerUser.get('password')?.value,
      alias: this.registerUser.get('alias')?.value
    }
    console.log(NUEVOUSUARIO)
  }

  desplegar(){
    const deplegarForm = this.segundofromulario?.nativeElement
    this.renderer2.removeClass(deplegarForm,"visually-hidden")
  }

  ocultar(){
    const OcultarForm = this.segundofromulario?.nativeElement
    this.renderer2.addClass(OcultarForm,"visually-hidden")

  }


}


