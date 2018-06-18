import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { cityRoutes } from './city/city.routes';

export const routes: Routes = [
    {
        path: 'cities',
        component: CityComponent,
        children: cityRoutes
    }, {
        path: '',
        redirectTo: 'cities',
        pathMatch: 'full',
    },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
    routes, {}
);
