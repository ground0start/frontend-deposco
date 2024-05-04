import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesDistributionComponent } from './sales-distribution/sales-distribution.component';
import { SalesTrendsComponent } from './sales-trends/sales-trends.component';

export const routes: Routes = [
  { path: 'sales-distribution', component: SalesDistributionComponent },
  { path: 'sales-trends', component: SalesTrendsComponent },
  { path: '', redirectTo: '/sales-trends', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }