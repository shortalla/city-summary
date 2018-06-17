import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CityCreateComponent } from './city-create.component';
import { FormTemplateModule } from '../shared/form-template/form-template.module';
import { ButtonModule } from '../shared/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormTemplateModule,
    ButtonModule,
  ],
  declarations: [
    CityCreateComponent,
  ],
})
export class CityCreateModule { }
