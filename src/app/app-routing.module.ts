import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WhiteboardComponent} from './components/whiteboard/whiteboard.component';
import {ItemFormComponent} from './components/item-form/item-form.component';

export const routes: Routes = [
  { path: 'home', component:  WhiteboardComponent},
  { path: 'home/create/:board', component: ItemFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
