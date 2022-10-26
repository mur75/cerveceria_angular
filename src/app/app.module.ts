import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule} from "@angular/common/http"
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { FormregisteruserComponent } from './components/formregisteruser/formregisteruser.component';
import { ProfileuserComponent } from './components/profileuser/profileuser.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { LoginuserComponent } from './components/loginuser/loginuser.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewindividualproductComponent } from './components/viewindividualproduct/viewindividualproduct.component';
import { PacksComponent } from './components/packs/packs.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormproductsComponent } from './components/formproducts/formproducts.component';
import { TableproductsComponent } from './components/tableproducts/tableproducts.component';




import { CarouselModule } from 'ngx-owl-carousel-o';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { FooterhomeComponent } from './components/footerhome/footerhome.component';
import { ListproductsComponent } from './components/listproducts/listproducts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { ReactiveFormsModule } from "@angular/forms";




@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        Navbar2Component,
        FormregisteruserComponent,
        ProfileuserComponent,
        UserlistComponent,
        LoginuserComponent,
        ListusersComponent,
        ProductsComponent,
        ViewindividualproductComponent,
        PacksComponent,
        CartComponent,
        CheckoutComponent,
        FormproductsComponent,
        TableproductsComponent,
        EditprofileComponent,
        FooterhomeComponent,
        ListproductsComponent,
        NotFoundComponent
    
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CarouselModule,
        NgxSliderModule,
        ReactiveFormsModule,
        HttpClientModule
    
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
