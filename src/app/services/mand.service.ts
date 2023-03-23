import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MandService {

  public mandItems : any =[]
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getProductList(){
    return this.productList.asObservable();
  }

  setProductList(product: any){
    this.mandItems.push(...product);
    this.productList.next(product);
  }
  addToMand(product : any){
    this.mandItems.push(product);
    this.productList.next(this.mandItems);
    this.calculatePrice();
    console.log(this.mandItems)
  }

  calculatePrice() : number{
    let total = 0;
    this.mandItems.map((a:any)=>{
      total += a.total
      })
    return total;
  }

  removeItem(product:any){
    this.mandItems.map((a:any, index:any) =>{
      if(product.id===a.id){
        this.mandItems.splice(index,1)
      }
      })
  }

  emptyMand(){
    this.mandItems= []
    this.productList.next(this.mandItems)
  }

}
