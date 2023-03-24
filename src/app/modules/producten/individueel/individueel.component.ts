import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import {ProductService} from "../../../services/product.service";


@Component({
  selector: 'app-individueel',
  templateUrl: './individueel.component.html',
  styleUrls: ['./individueel.component.scss']
})
export class IndividueelComponent implements OnInit{

  product: any = null;
   productId: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productId = params['id'];
    })
    console.log(this.productId)
    this.productService.getProduct(this.productId).subscribe({
      next: (results) => {
        this.product = results;
        this.product = this.product.data
      }
    })

  }

}
