import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DoersRoutingModule } from './doers-routing.module';
import { DoersComponent } from './doers/doers.component';

@NgModule({
  imports: [CommonModule, DoersRoutingModule],
  declarations: [DoersComponent],
})
export class DoersModule {}
