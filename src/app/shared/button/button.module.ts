import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonComponent } from './action-button/action-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActionButtonComponent,
    IconButtonComponent
  ],
  exports: [
    ActionButtonComponent,
    IconButtonComponent
  ]
})
export class ButtonModule { }
