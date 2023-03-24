import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {environment} from "../../environments/environment";

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

  setProducts(product: any){
    this.mandItems.push(...product)
    this.productList.next("")
  }

  getMandItems(){
    return this.mandItems;
  }

  addToMand(product : any){
    const BreakError = {};
    try {

      let productQ = Object.assign(product, {quantity: 1})
      this.mandItems.forEach((item: any, index: number) => {
        console.log(this.mandItems)


        if (productQ.id === item.id) {
          this.addQuantity(item.quantity);
          item.quantity = (item['quantity'] + 1);
          this.productList.next(this.mandItems)
          throw BreakError;
        }
      })
      this.mandItems.push(productQ);
      console.log(this.mandItems)
      this.productList.next(this.mandItems)
    } catch (err) {
      if (err !== BreakError) throw err;
      if (err !== BreakError) throw err;
    }
  }

  calculatePrice() : number{
    let total = 0;
    this.mandItems.forEach(function (item:any) {
      total =+ item.price * item.quantity;
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

  // setProductList(product: any){
  //   this.mandItems.push(...product);
  //   this.productList.next(product);
  // }


  addQuantity(quantity:any){
    console.log(quantity)
    console.log(typeof quantity);
  }





}
