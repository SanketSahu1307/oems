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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { LoginAuthGuard } from './pages/OemsApiService/OemsUserGuard/login-auth.guard';
import { ErrorComponent } from './components/error/error.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserInterCeptorProvider } from './pages/OemsApiService/OemsUserInterceptor/user.interceptor';

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
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginAuthGuard,UserInterCeptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
