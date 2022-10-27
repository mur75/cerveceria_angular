import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { loginusuario } from 'src/app/models/login';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-loginuser',
    templateUrl: './loginuser.component.html',
    styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {


    validarUsuario: FormGroup
    dataUsuario?: any

    constructor(private fb: FormBuilder, private router: Router) {

        this.validarUsuario = this.fb.group({

            correo: ["", Validators.required],
            password: ["", Validators.required]
        })
    }

    ngOnInit(): void {
    }

    guardarValidacion() {
        console.log(this.validarUsuario)
        let usuario = this.validarUsuario.get("correo")?.value
        let clave = this.validarUsuario.get("password")?.value

        this.dataUsuario = localStorage.getItem("dataUsuario")
        this.dataUsuario = JSON.parse(this.dataUsuario)

        console.log("INFO ", this.dataUsuario)

        if (this.dataUsuario.correo != usuario) {
            Swal.fire({
                icon: 'error',
                title: 'Ashh, tenemos una mala noticia :(',
                text: 'Aun no eres mimebro de nuestro club, pero puedes registrarte totalmente gratis en nuestra pagina de registro'
            })
        }

        if(this.dataUsuario.password != clave){
            Swal.fire({
                icon: 'error',
                title: 'Ashh, tenemos una mala noticia :(',
                text: 'Tus datos no coinciden con nuestros registros 😥'
            })
        }

        if(this.dataUsuario.password == clave && this.dataUsuario.correo == usuario){
            this.router.navigate(["paquetesProductos"])
        }


        //login() {
        // let email = localStorage.getItem('correo')
        // let password = localStorage.getItem('password')
        // let correo_usuario = document.getElementById("inputEmail4")?.value
        // if (!USER.correo.value === email || password.value === password) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Ashh, tenemos una mala noticia :(',
        //         text: 'Aun no eres mimebro de nuestro club, pero puedes registrarte totalmente gratis en nuestra pagina de registro'
        //     })else{
        //         location.href = 'https://mur75.github.io/cerveceria_angular/'
        //     }
        // }

    }

}
