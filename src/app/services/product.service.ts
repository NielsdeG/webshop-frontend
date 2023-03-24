import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = `${environment.APIEndpoint}/api/v1/product`;

 httpOptions = {
   headers: new HttpHeaders({
     Accept: 'application/json',
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*',
   }),
 };

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<any>(this.baseUrl, this.httpOptions)
      .pipe(
      map((responseData: any) => {
        return responseData.data
      })
    )
  }

  getToken(){
    return localStorage.getItem("token");
  }

  saveProduct(id:String, title:String, price:string, category:String, description:String, image:String){
  let options = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.getToken()),
  }
    const body = {
      id: id,
      title: title,
      price: price,
      category: category,
      description: description,
      image: image
    };
  return this.http.put(this.baseUrl + '/save', body, options)
  }

  getProduct(id:string){
    return this.http.get(this.baseUrl + '?id='+id)
  }

  deleteProduct(id:string){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + this.getToken()),
    }
    return this.http.delete(this.baseUrl + '/delete?id='+id)
  }

  createProduct(title:string, category:string, image:string, description:string, price:string){
    let options = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.getToken()),
    }
    const body = {
      title: title,
      price: price,
      category: category,
      description: description,
      image: image
    };
    console.log(body)
    return this.http.post(this.baseUrl + '/create', body, )
  }

}
