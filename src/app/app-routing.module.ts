import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/component/login/login.component';
import { MenuComponent } from './core/component/menu/menu.component';
import { AdminMenuComponent } from './core/component/admin-menu/admin-menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, children: [
      { path: 'fruit', loadChildren: 
          () => import('./modules/fruit/fruit.module')
          .then(m => m.FruitModule)
      },
      { path: 'box', loadChildren: 
          () => import('./modules/box/box.module')
          .then(m => m.BoxModule)
      },
  ]
  },
  { path: 'admin', component: AdminMenuComponent},
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
