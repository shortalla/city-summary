import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListComponent } from './city-list.component';
import { ListModule } from '../../shared/list/list.module';
import { AppRoutingModule } from '../../app.routes';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SectionModule } from '../../shared/section/section.module';
import { ButtonModule } from '../../shared/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ListModule,
    SectionModule,
    ButtonModule,
    AppRoutingModule,
  ],
  declarations: [
    CityListComponent,
  ],
  exports: [
    CityListComponent,
  ]
})
export class CityListModule { }
