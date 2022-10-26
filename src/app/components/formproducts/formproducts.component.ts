import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Productos } from 'src/app/models/productos';

@Component({
    selector: 'app-formproducts',
    templateUrl: './formproducts.component.html',
    styleUrls: ['./formproducts.component.css']
})
export class FormproductsComponent implements OnInit {

    @ViewChild('popo') inputPrecio?: ElementRef
    @ViewChild('popodos') labelpopo?: ElementRef


    productForm: FormGroup;
    poporepopo = 0


    constructor(private fb: FormBuilder, private renderer2: Renderer2) {
        this.productForm = this.fb.group({
            nombre: ['', Validators.required],
            precio: ['', Validators.required],
            describcion: ['', Validators.required],
            estilo: ['', Validators.required],
            casacervezera: ['', Validators.required],
            color: ['', Validators.required],
            gradoalcohol: ['', Validators.required],
            paisorigen: ['', Validators.required],
            presentacion: ['', Validators.required],
            ibu: ['', Validators.required],
            disponibilidad: ['', Validators.required],
            categoria: ['', Validators.required]
        })
    }

    ngOnInit(): void {
    }

    agregarProducto() {
        console.log(this.productForm);
        console.log(this.productForm.get('nombre')?.value);

        const PRODUCTO: Productos = {
            nombre: this.productForm.get("nombre")?.value,
            precio: this.productForm.get("precio")?.value,
            describcion: this.productForm.get("describcion")?.value,
            estilo: this.productForm.get("estilo")?.value,
            casacervezera: this.productForm.get("casacervezera")?.value,
            color: this.productForm.get("color")?.value,
            gradoalcohol: this.productForm.get("gradoalcohol")?.value,
            paisorigen: this.productForm.get("paisorigen")?.value,
            presentacion: this.productForm.get("presentacion")?.value,
            ibu: this.productForm.get("ibu")?.value,
            disponibilidad: this.productForm.get("disponibilidad")?.value,
            categoria: this.productForm.get("categoria")?.value
        }

        console.log(PRODUCTO);
    }
    cpf() {
        const inputFormulario = this.inputPrecio?.nativeElement
        const spanFormulario = this.labelpopo?.nativeElement
        let pepe = this.productForm.get("precio")?.value
        pepe = pepe.replace(/([^0-9\.]+)/g, '');
        pepe = pepe.replace(/^[\.]/, '');
        pepe = pepe.replace(/[\.][\.]/g, '');
        pepe = pepe.replace(/\.(\d)(\d)(\d)/g, '.$1$2');
        pepe = pepe.replace(/\.(\d{1,2})\./g, '.$1');
        pepe = pepe.toString().split('').reverse().join('').replace(/(\d{3})/g, '$1,');
        pepe = pepe.split('').reverse().join('').replace(/^[\,]/, '');
        console.log(pepe);

        spanFormulario.innerHTML = "$ "
        this.poporepopo = this.renderer2.createText(pepe);
        this.renderer2.appendChild(spanFormulario, this.poporepopo);
    }

}

