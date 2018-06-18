import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryTemplateComponent } from './summary-template.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SectionModule } from '../section/section.module';

@NgModule({
  imports: [
    CommonModule,
    SectionModule,
    FlexLayoutModule,
  ],
  declarations: [
    SummaryTemplateComponent,
  ],
  exports: [
    SummaryTemplateComponent
  ]
})
export class SummaryTemplateModule { }
