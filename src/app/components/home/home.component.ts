import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    customOptions: OwlOptions = {
        loop: true,
        autoplayTimeout: 3000,
        dots: false,
        autoplay: true,
        //navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            740: {
                items: 3
            },
            940: {
                items: 4
            }
        },
    }

    constructor() { }

    ngOnInit(): void {
        if (sessionStorage.getItem("Autorizado") == null) {
            Swal.fire({
                title: '¿Eres mayor de 18 años?',
                text: "Prohibido el expendio de bebidas embriagantes a menores de edad, el exceso de alcohol es perjudicial para la salud, no se permite el consumo de bebidas alcoholicas en lugares no autorizados",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Tengo 18 años o más',
                cancelButtonText: 'No tengo 18 años o más'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Bienvenido a la mejor cervecería virtual',
                        text: 'Disfruta la experiencia cervezera 🍻🍻',
                    })
                    sessionStorage.setItem("Autorizado", "")
                } else {
                    location.href = 'https://google.com'
                }
            })
        }
    }



}
