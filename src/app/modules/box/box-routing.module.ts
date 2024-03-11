import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxManagementComponent } from './box-management/box-management.component';

const routes: Routes = [
  { path: '', component: BoxManagementComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxRoutingModule { }
