import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { PizzaComponent } from './components/dupa/pizza/pizza.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const defaultPath = 'home-page';
const routes: Routes = [
  {
    path: defaultPath,
    loadChildren: () =>
      import('./components/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./components/account/account.module').then(
        (m) => m.AccountModule
      ),
  },
  { path: 'pizza', component: PizzaComponent },
  {
    path: '',
    redirectTo: defaultPath,
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: defaultPath,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
