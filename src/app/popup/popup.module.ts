import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupRoutingModule } from './popup-routing.module';
import { PopupComponent } from './popup.component';

@NgModule({
  imports: [
    CommonModule,
    PopupRoutingModule
  ],
  declarations: [PopupComponent]
})
export class PopupModule { }
