import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { BusinessFormComponent } from './business-form/business-form.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { PremiumFormComponent } from './premium-form/premium-form.component';
import { AuthGuardGuard } from './api_service/auth_Guard/auth-guard.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'address-form',
    component: AddressFormComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'business-form',
    component: BusinessFormComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'location-form',
    component: LocationFormComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'premium-form',
    component: PremiumFormComponent,
    canActivate: [AuthGuardGuard],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
