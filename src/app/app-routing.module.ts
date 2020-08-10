import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'toolbar', component: ToolbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
