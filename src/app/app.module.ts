import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { MandComponent } from './modules/mand/mand.component';
import { ProductenComponent } from './modules/producten/producten.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminPageComponent } from './modules/admin/admin-page/admin-page.component';
import { LoginComponent } from './modules/header/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { IndividueelComponent } from './modules/producten/individueel/individueel.component';
import { AddComponent } from './modules/admin/admin-page/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MandComponent,
    ProductenComponent,
    AdminPageComponent,
    LoginComponent,
    IndividueelComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
