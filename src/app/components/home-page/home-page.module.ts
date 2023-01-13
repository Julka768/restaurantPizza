import { NgModule } from '@angular/core';
import { PizzaModule } from '../component-model/pizza/pizza.module';
import { HomePageComponent } from './home-page.component';
import { HomePageRouterModule } from './home-page.routing.module';

@NgModule({
  imports: [HomePageRouterModule, PizzaModule],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
