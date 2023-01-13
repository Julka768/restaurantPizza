import { NgModule } from '@angular/core';
import { PizzaComponent } from './pizza.component';
import { PizzaRouterModule } from './pizza.routing.module';

@NgModule({
  imports: [PizzaRouterModule],
  exports: [PizzaComponent],
  declarations: [PizzaComponent],
})
export class PizzaModule {}
