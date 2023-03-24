import { Component } from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductService} from "../../../services/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import * as child_process from "child_process";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {

  login = new FormGroup({
    price: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl('')
  });



  productList: ProductModel[] = [];

  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next: (results) => {
        console.log(results)
        this.productList = results;
      }
    })
  }

  submitForm(){
    console.log("wow")
  }

  saveChanges(changeForm: HTMLFormElement, product: ProductModel) {
    const title = changeForm["titles"].value;
    const description = changeForm["description"].value
    const price = changeForm["price"].value
      this.productService.saveProduct(product.id, title, price, product.category, description, product.image).subscribe({
        next: (responseData: any) =>{
        },
        error: (err) =>{
        }
      })
  }

  delete(item:any){
    console.log(item.id)
    this.productService.deleteProduct(item.id).subscribe()
  }

}
