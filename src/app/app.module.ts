import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { CityListModule } from './city-list/city-list.module';
import { CityDetailsModule } from './city-details/city-details.module';
import { CityCreateModule } from './city-create/city-create.module';
import { AppRouterModule } from './app.routes';

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
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
