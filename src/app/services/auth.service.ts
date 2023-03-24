import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, tap} from 'rxjs';
import {throwDialogContentAlreadyAttachedError} from "@angular/cdk/dialog";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = `${environment.APIEndpoint}/api/v1/auth`;
  private _isLoggedIn = new BehaviorSubject<boolean>(false)
  isLoggedIn = this._isLoggedIn.asObservable();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this._isLoggedIn.next(!!token)
  }

  login(username: any, password:any){
    return this.http.post(this.baseUrl + `/auth`, { "name": username, "password" : password }).pipe(
      tap((response: any) => {
        this._isLoggedIn.next(true);
        localStorage.setItem('token', response.body.data.token)
        localStorage.setItem('name', response.body.data.name)
        localStorage.setItem('name', response.body.data.role)

        console.log(response.body.data.token)
      })
    );
  }

}
