import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiKeyConfigComponent } from './api-key-config/apiKeyConfig.component';

const routes: Routes = [{
  path: '',
  component: ApiKeyConfigComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
