import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityCreateModule } from './city-create/city-create.module';
import { CityDetailsModule } from './city-details/city-details.module';
import { CityEditModule } from './city-edit/city-edit.module';
import { CityListModule } from './city-list/city-list.module';
import { AppRoutingModule } from '../app.routes';
import { CityComponent } from './city.component';

@NgModule({
  imports: [
    CommonModule,
    CityCreateModule,
    CityDetailsModule,
    CityEditModule,
    CityListModule,
    AppRoutingModule,
  ],
  declarations: [
    CityComponent
  ],
  exports: [
    CityComponent
  ]
})
export class CityModule { }
