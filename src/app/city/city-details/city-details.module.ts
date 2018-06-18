import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityDetailsComponent } from './city-details.component';
import { ButtonModule } from '../../shared/button/button.module';
import { SummaryTemplateModule } from '../../shared/summary-template/summary-template.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    SummaryTemplateModule,
    FlexLayoutModule,
  ],
  declarations: [
    CityDetailsComponent,
  ],
  exports: [
    CityDetailsComponent,
  ],
})
export class CityDetailsModule { }
