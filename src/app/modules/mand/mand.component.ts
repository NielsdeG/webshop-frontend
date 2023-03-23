import {Component, OnInit} from '@angular/core';
import {MandService} from "../../services/mand.service";

@Component({
  selector: 'app-mand',
  templateUrl: './mand.component.html',
  styleUrls: ['./mand.component.scss']
})
export class MandComponent implements OnInit{

  public product : any = [];
  public grandTotal : number = 0;
  constructor(private mandservice: MandService) { }

  ngOnInit(): void {
    this.mandservice.getProductList().subscribe(res=>{
      this.product = res;
      this.grandTotal = this.mandservice.calculatePrice();
    })
  }
}
