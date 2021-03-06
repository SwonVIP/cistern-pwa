import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MeasurementsComponent } from './measurements/measurements.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: MeasurementsComponent
},
{
  path: 'admin',
  component: AdminComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
