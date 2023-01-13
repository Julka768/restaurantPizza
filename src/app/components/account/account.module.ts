import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountRouterModule } from './account.routing.module';

@NgModule({
  imports: [AccountRouterModule],
  declarations: [AccountComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccountModule {}
