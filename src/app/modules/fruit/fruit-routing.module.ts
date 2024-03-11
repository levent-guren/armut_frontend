import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitManagementComponent } from './fruit-management/fruit-management.component';
import { FruitCreateComponent } from './fruit-create/fruit-create.component';

const routes: Routes = [
  { path: '', component: FruitManagementComponent, pathMatch: 'full' },
  { path: 'create', component: FruitCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitRoutingModule { }
