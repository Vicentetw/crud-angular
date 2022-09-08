import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/login/sign-in/sign-in.component';
import { SignUpComponent } from './pages/login/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { VerifyEmailComponent} from './pages/login/verify-email/verify-email.component';

const routes: Routes = [{ path: 'list', loadChildren: () => import('./pages/employees/list/list.module').then(m => m.ListModule) },
 { path: 'new', loadChildren: () => import('./pages/employees/new/new.module').then(m => m.NewModule) }, 
 { path: 'details', loadChildren: () => import('./pages/employees/details/details.module').then(m => m.DetailsModule) }, 
 { path: 'edit', loadChildren: () => import('./pages/employees/edit/edit.module').then(m => m.EditModule) }, 
 { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard/dashboard.module').then(m => m.DashboardModule) },
 { path: '', loadChildren: () => import('./pages/dashboard/dashboard/dashboard.module').then(m => m.DashboardModule) },
 //{ path: '**', redirectTo:'',pathMatch:'full' }]
 { path: '**', redirectTo:'/sign-in',pathMatch:'full' },
 { path: 'sign-in', component: SignInComponent },
 { path: 'register-user', component: SignUpComponent },
 { path: 'login', component: LoginComponent },
 { path: 'forgot-password', component: ForgotPasswordComponent },
 { path: 'verify-email-address', component: VerifyEmailComponent },

]
 ;
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
