import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../services/product.service";
import {ProductModel} from "../../../models/product.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{

  constructor(private productService: ProductService) {
  }

  createProduct(changeForm: HTMLFormElement){
    const title = changeForm["titles"].value;
    const category = changeForm["category"].value;
    const image = changeForm["image"].value;
    const description = changeForm["description"].value
    const price = changeForm["price"].value
    this.productService.createProduct(title,category,image,description,price).subscribe({
      next: (responseData: any) =>{
      },
      error: (err) =>{
      }
    })

  }

  ngOnInit(): void {
  }

}
