import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTemplateComponent } from './form-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ErrorModule } from '../error/error.module';
import { SectionModule } from '../section/section.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ErrorModule,
    SectionModule
  ],
  declarations: [
    FormTemplateComponent,
  ],
  exports: [
    FormTemplateComponent
  ]
})
export class FormTemplateModule { }
