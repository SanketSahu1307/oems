import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './components/admin-dashboard/add-categories/add-categories.component';
import { AddQuizzesComponent } from './components/admin-dashboard/add-quizzes/add-quizzes.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './components/admin-dashboard/admin-profile/admin-profile.component';
import { CategoriesComponent } from './components/admin-dashboard/categories/categories.component';
import { QuizzesComponent } from './components/admin-dashboard/quizzes/quizzes.component';
import { AllQuizzesComponent } from './components/dash-board/all-quizzes/all-quizzes.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { ProfileComponent } from './components/dash-board/profile/profile.component';
import { ErrorComponent } from './components/error/error.component';
import { FakeStoreComponent } from './components/fake-store/fake-store.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OemsLoginComponent } from './components/oems-login/oems-login.component';
import { OemsRegisterComponent } from './components/oems-register/oems-register.component';
import { LoginAuthGuard } from './pages/OemsApiService/OemsUserGuard/login-auth.guard';
import { UserAdminGuard } from './pages/OemsApiService/OemsUserGuard/user-admin.guard';

const routes: Routes = [
  {path:"",redirectTo:"login", pathMatch:"full"},
  {path:"login", component:OemsLoginComponent},
  {path:"signUp", component:OemsRegisterComponent},
  {path:"adminDashboard/:name", component:AdminDashboardComponent,canActivate:[LoginAuthGuard],children:[
    {path:"",component:AdminProfileComponent,outlet:"adminprofile"},
    {path:"categories",component:CategoriesComponent,outlet:"adminprofile"}, 
    {path:"addCategories",component:AddCategoriesComponent,outlet:"adminprofile"},
    {path:"quizzes",component:QuizzesComponent,outlet:"adminprofile"},
    {path:"addQuizzes",component:AddQuizzesComponent,outlet:"adminprofile"},
    // {path:"fake",component:FakeStoreComponent}
  ]},
  {path:"dashboard/:name", component:DashBoardComponent,canActivate:[LoginAuthGuard],children:[
    {path:"",component:ProfileComponent,outlet:"userprofile"},
    {path:"allQuizzes",component:AllQuizzesComponent,outlet:"userprofile"}
  ]},
  {path:"logout", component:LogoutComponent},
  {path:"**", component:ErrorComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
