import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { CityListModule } from './city-list/city-list.module';
import { CityDetailsModule } from './city-details/city-details.module';
import { CityCreateModule } from './city-create/city-create.module';
import { CityEditModule } from './city-edit/city-edit.module';
import { AppRouterModule } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CityListModule,
    CityDetailsModule,
    CityCreateModule,
    CityEditModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
