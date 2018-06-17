import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListComponent } from './city-list.component';
import { ListModule } from '../shared/list/list.module';
import { AppRouterModule } from '../app.routes';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppRouterModule,
    ListModule,
  ],
  declarations: [
    CityListComponent,
  ]
})
export class CityListModule { }
