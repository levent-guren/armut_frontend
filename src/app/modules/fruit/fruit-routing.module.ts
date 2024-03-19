import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitManagementComponent } from './fruit-management/fruit-management.component';
import { FruitCreateComponent } from './fruit-create/fruit-create.component';
import { FruitAcceptComponent } from './fruit-accept/fruit-accept.component';
import { FruitSaleComponent } from './fruit-sale/fruit-sale.component';

const routes: Routes = [
  { path: '', component: FruitManagementComponent, pathMatch: 'full' },
  { path: 'create', component: FruitCreateComponent },
  { path: 'accept', component: FruitAcceptComponent },
  { path: 'sale', component: FruitSaleComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitRoutingModule { }
