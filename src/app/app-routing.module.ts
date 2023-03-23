import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductenComponent} from "./modules/producten/producten.component";
import {MandComponent} from "./modules/mand/mand.component";
import { LoginComponent } from './modules/header/login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'producten',pathMatch:'full'},
  {path: 'producten', component: ProductenComponent},
  {path: 'mandje', component: MandComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
