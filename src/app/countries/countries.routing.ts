import { Routes, RouterModule } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
  {
    path: 'capital',
    component: ByCapitalPageComponent,
  },
  {
    path: 'country',
    component: ByCountryPageComponent,
  },
  {
    path: 'region',
    component: ByRegionPageComponent,
  },
  {
    path: 'by/:id',
    component: CountryPageComponent,
  },
  {
    path: '**',
    redirectTo: 'capital',
    pathMatch: 'full',
  },
];

export const CountriesRoutes = RouterModule.forChild(routes);
