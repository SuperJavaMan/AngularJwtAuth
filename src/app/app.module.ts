import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { HomeNoteComponent } from './notes/home-note/home-note.component';
import { ShowNoteComponent } from './notes/show-note/show-note.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';
import { UpdateNoteComponent } from './notes/update-note/update-note.component';
import { DeleteNoteComponent } from './notes/delete-note/delete-note.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    HomeNoteComponent,
    ShowNoteComponent,
    AddNoteComponent,
    UpdateNoteComponent,
    DeleteNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
