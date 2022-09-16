import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { EmployeeFormModule } from './shared/components/employee-form/employee-form.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { SignInComponent } from './pages/login/sign-in/sign-in.component';
import { SignUpComponent } from './pages/login/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './pages/login/verify-email/verify-email.component';
import { LoginComponent } from './pages/login/login/login.component';
//Auth services
import { AuthService } from './shared/services/auth.service';
import { FilterPipe } from './shared/pipes/filter.pipe';
//Auth services
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    LoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HeaderModule,
    EmployeeFormModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFunctions(() => getFunctions()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule ,
    //import reactiveFormsModule
    ReactiveFormsModule,
    FormsModule
  ],
  //in providers AuthService
  providers: [AngularFirestore,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
