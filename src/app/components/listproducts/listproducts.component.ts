import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-listproducts',
    templateUrl: './listproducts.component.html',
    styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {;
    }

}
