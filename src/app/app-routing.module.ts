import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { ErrorComponent } from './components/error/error.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OemsLoginComponent } from './components/oems-login/oems-login.component';
import { OemsRegisterComponent } from './components/oems-register/oems-register.component';
import { LoginAuthGuard } from './pages/OemsApiService/OemsUserGuard/login-auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"login", pathMatch:"full"},
  {path:"login", component:OemsLoginComponent},
  {path:"signUp", component:OemsRegisterComponent},
  {path:"dashboard/:name", component:DashBoardComponent,canActivate:[LoginAuthGuard]},
  {path:"logout", component:LogoutComponent},
  {path:"**", component:ErrorComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
