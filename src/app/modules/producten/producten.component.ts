import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModel} from "../models/product.model";
import {MandService} from "../../services/mand.service";

@Component({
  selector: 'app-producten',
  templateUrl: './producten.component.html',
  styleUrls: ['./producten.component.scss']
})
export class ProductenComponent {

  productList: ProductModel[] = [];

  constructor(private productService: ProductService, private mandService: MandService) {
  }
  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next: (results) => {
        this.productList = results;
      }
    })
  }
  addToMand(item: any){
    this.mandService.addToMand(item);
  }

}
