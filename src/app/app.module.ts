import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatModule } from "./mat/mat/mat.module";
import { OemsLoginComponent } from './components/oems-login/oems-login.component';
import { OemsRegisterComponent } from './components/oems-register/oems-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { LoginAuthGuard } from './pages/OemsApiService/OemsUserGuard/login-auth.guard';
import { ErrorComponent } from './components/error/error.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserInterCeptorProvider } from './pages/OemsApiService/OemsUserInterceptor/user.interceptor';
import { CategoriesComponent } from './components/admin-dashboard/categories/categories.component';
import { AddCategoriesComponent } from './components/admin-dashboard/add-categories/add-categories.component';
import { QuizzesComponent } from './components/admin-dashboard/quizzes/quizzes.component';
import { AddQuizzesComponent } from './components/admin-dashboard/add-quizzes/add-quizzes.component';
import { AllQuizzesComponent } from './components/dash-board/all-quizzes/all-quizzes.component';
import { AdminProfileComponent } from './components/admin-dashboard/admin-profile/admin-profile.component';
import { ProfileComponent } from './components/dash-board/profile/profile.component';
import { FakeStoreComponent } from './components/fake-store/fake-store.component';
import { QuestionComponent } from './components/admin-dashboard/question/question.component';
import { SolveQuestionComponent } from './components/admin-dashboard/solve-question/solve-question.component';
import { PaymentGatewayComponent } from "./components/payment-gateway/payment-gateway.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    OemsLoginComponent,
    OemsRegisterComponent,
    LogoutComponent,
    DashBoardComponent,
    ErrorComponent,
    AdminDashboardComponent,
    CategoriesComponent,
    AddCategoriesComponent,
    QuizzesComponent,
    AddQuizzesComponent,
    AllQuizzesComponent,
    AdminProfileComponent,
    ProfileComponent,
    FakeStoreComponent,
    QuestionComponent,
    SolveQuestionComponent,
    PaymentGatewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginAuthGuard,UserInterCeptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
