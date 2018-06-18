import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CityCreateComponent } from './city-create/city-create.component';
import { CityEditComponent } from './city-edit/city-edit.component';

export const cityRoutes: Routes = [
    {
        path: '',
        component: CityListComponent,
    }, {   
        path: 'details/:id',
        component: CityDetailsComponent,
    }, {   
        path: 'add',
        component: CityCreateComponent,
    }, {   
        path: 'edit/:id',
        component: CityEditComponent,
    },
];

export const CityRoutingModule: ModuleWithProviders = RouterModule.forChild(cityRoutes);