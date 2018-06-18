import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { ActionButtonComponent } from './action-button/action-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [
    ActionButtonComponent,
  ],
  exports: [
    ActionButtonComponent,
  ]
})
export class ButtonModule { }
