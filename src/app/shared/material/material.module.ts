import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports:[
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
