import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardMComponent } from './components/dashboard-m/dashboard-m.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboardM', component: DashboardMComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
