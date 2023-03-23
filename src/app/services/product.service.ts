import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 httpOptions = {
   headers: new HttpHeaders({
     Accept: 'application/json',
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*',
   }),
 };

 apiEndpoint = "http://localhost:8080/api/v1/";
  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<any>(`http://localhost:8080/api/v1/product`, this.httpOptions)
      .pipe(
      map((responseData: any) => {
        return responseData.data
      })
    )
  }
}
