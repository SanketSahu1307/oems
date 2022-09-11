import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OemsLoginComponent } from './components/oems-login/oems-login.component';
import { OemsRegisterComponent } from './components/oems-register/oems-register.component';

const routes: Routes = [
  {path:"",redirectTo:"login", pathMatch:"full"},
  {path:"login", component:OemsLoginComponent},
  {path:"signUp", component:OemsRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
