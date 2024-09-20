import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [NavbarComponent, SearchBoxComponent, LoadingSpinnerComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SearchBoxComponent, LoadingSpinnerComponent],
})
export class SharedModule {}
