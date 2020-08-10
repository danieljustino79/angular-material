import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
