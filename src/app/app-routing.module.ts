import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  // { path: 'pizza', loadChildren: () =>
  // import('./components/account/account.module').then(
  //   (m) => m.AccountModule
  // ), },
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
