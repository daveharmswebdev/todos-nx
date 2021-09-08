import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoersComponent } from './doers/doers.component';

const routes: Routes = [{ path: '', component: DoersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoersRoutingModule {}
