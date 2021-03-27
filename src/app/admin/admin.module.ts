import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiKeyConfigComponent } from './api-key-config/apiKeyConfig.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';
import { ConfigOverviewComponent } from './config-overview/config-overview.component';


@NgModule({
  declarations: [
    ApiKeyConfigComponent,
    PushNotificationsComponent,
    ConfigOverviewComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
