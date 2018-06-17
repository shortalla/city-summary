import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CityEditComponent } from './city-edit.component';
import { FormTemplateModule } from '../shared/form-template/form-template.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormTemplateModule,
  ],
  declarations: [
    CityEditComponent,
  ],
})
export class CityEditModule { }
