import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  login = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder,) {}

  ngOnInit(): void {
  }


  submitForm() {
    if (this.login.invalid) {
      return;
    }
    this.authService
      .login(this.login.value.name, this.login.value.password)
      .subscribe((response) => {
        this.router.navigate(['/producten']);
      });
  }
}
