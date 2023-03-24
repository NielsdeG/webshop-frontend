import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductenComponent} from "./modules/producten/producten.component";
import {MandComponent} from "./modules/mand/mand.component";
import { LoginComponent } from './modules/header/login/login.component';
import {AdminPageComponent } from '../app/modules/admin/admin-page/admin-page.component'
import {IndividueelComponent} from "./modules/producten/individueel/individueel.component";
import {AddComponent} from "./modules/admin/admin-page/add/add.component";

const routes: Routes = [
  {path: '', redirectTo:'producten',pathMatch:'full'},
  {path: 'producten', component: ProductenComponent},
  {path: 'mandje', component: MandComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'product', component: IndividueelComponent},
  {path: 'add', component: AddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
