import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from "@angular/common/http";

import { MatInputModule } from "@angular/material/input";
import { MeasurementsComponent } from "./measurements/measurements.component";
import { MessagesComponent } from "./messages/messages.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementsComponent,
    MessagesComponent,
    SidenavComponent
  ],
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
