import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CityCreateComponent } from './city-create/city-create.component';

export const routes: Routes = [
    {
        path: 'list',
        component: CityListComponent,
    }, {   
        path: 'details',
        component: CityDetailsComponent,
    }, {   
        path: 'create',
        component: CityCreateComponent,
    }, {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
];

export const AppRouterModule: ModuleWithProviders = RouterModule.forRoot(routes, {});