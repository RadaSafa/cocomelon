import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './page/buy/buy.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { MainDashboardComponent } from './page/main-dashboard/main-dashboard.component';
import { ProductComponent } from './page/product/product.component';
import { TransactionComponent } from './page/transaction/transaction.component';

const routes: Routes = [
  {
    path: 'login-page',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full',
  },
  {
    path: 'mainDashboard-page',
    component: MainDashboardComponent,
  },
  {
    path: 'dashboard-page',
    component: DashboardComponent,
  },

  {
    path: 'transaction-page',
    component: TransactionComponent,
  },
  {
    path: 'product-page',
    component: ProductComponent,
  },
  {
    path: 'buy-page',
    component: BuyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
