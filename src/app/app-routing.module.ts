import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PopupComponent} from "./popup/popup.component";

const routes: Routes = [
  { path: '', component: PopupComponent, pathMatch: 'full' },
  { path: '**', component: PopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
