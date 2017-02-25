import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherService } from "./_services/weather.service";
import { PopupComponent } from "./popup/popup.component";
import {AlertComponent} from "./_directives/alert.component";
import {AlertService} from "./_services/alert.service";

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    WeatherService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
