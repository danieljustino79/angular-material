import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav/sidenav.component';
import {ToolbarComponent} from './toolbar/toolbar.component';

const routes: Routes = [
  { path: 'sidenav', component: SidenavComponent },
  { path: 'toolbar', component: ToolbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
