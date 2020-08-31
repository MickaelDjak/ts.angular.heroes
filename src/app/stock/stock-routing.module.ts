import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StockManageComponent} from './components/stock-manage/stock-manage.component';
import {StockDashboardComponent} from './components/stock-dashboard/stock-dashboard.component';

const routes: Routes = [
  {path: 'stock', component: StockDashboardComponent},
  {path: 'stock/manage', component: StockManageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {
}

