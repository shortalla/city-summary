import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApiService } from './api/api.service';
import { AppRouterModule } from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    AppRouterModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    ApiService,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
