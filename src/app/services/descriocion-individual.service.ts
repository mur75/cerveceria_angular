import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescriocionIndividualService {

  @Output() envioDatoDesdePaksDescripion : EventEmitter<any> = new EventEmitter();


  public vistaIndividualItemList : any = []
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getProductsIndividual(){
    return this.productList.asObservable();
  }
  setProductIndividual(product : any){
    this.vistaIndividualItemList.push(...product);
    this.productList.next(product);
  }
  addtoCartIndividual(product: any){
    this.vistaIndividualItemList.push(product);
    this.productList.next(this.vistaIndividualItemList);
    this.getTotalPriceIndividual();
    console.log(this.vistaIndividualItemList)
  }
  getTotalPriceIndividual() : number {
    let grandTotal = 0;
    this.vistaIndividualItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItemIndividual(product:any){
    this.vistaIndividualItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.vistaIndividualItemList.splice(index,1);
      }
    })
    this.productList.next(this.vistaIndividualItemList);
    
  }
  removeAllCartIndividual(){
    this.vistaIndividualItemList= []
    this.productList.next(this.vistaIndividualItemList);
  }  
}
