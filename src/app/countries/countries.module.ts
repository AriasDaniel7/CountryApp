import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutes } from './countries.routing';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryTableComponent,
    CountryPageComponent,
  ],
  imports: [CommonModule, CountriesRoutes, SharedModule],
})
export class CountriesModule {}
