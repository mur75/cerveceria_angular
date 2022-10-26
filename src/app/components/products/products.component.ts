import { Component, OnInit } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";
import { ProductsService } from 'src/app/services/products.service';
import { Productos } from 'src/app/models/productos';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    value: number = 40;
    highValue: number = 60;
    options: Options = {
        floor: 0,
        ceil: 100
    };

    listaProductosAccesorios: Productos[] = [];
    listaProductosCervezas: Productos[] = [];


    constructor(private _productoService: ProductsService ) { }

    ngOnInit(): void {
        this.obtenerAccesorios("Accesorios");
        this.obtenerAccesorios("Cervezas");
    }

    obtenerAccesorios(textoCategoria:any) {
        this._productoService.getProductosxCategoria(textoCategoria).subscribe(data => {
            switch (textoCategoria) {
                case "Accesorios":
                    this.listaProductosAccesorios = data
                    console.log(textoCategoria+": ",this.listaProductosAccesorios);
                    break;
                case "Cervezas":
                    this.listaProductosCervezas = data
                    console.log(textoCategoria+": ",this.listaProductosCervezas);
                    break;
            }
            console.log("%c ----------------------------------", "color: yellow; font-size: 2rem;")
        }, error => {
            console.log(error)
        });
    }

}
