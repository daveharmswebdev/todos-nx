import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule, UiModule } from '@todos-nx/ui';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [CommonModule, MaterialModule, UiModule, TodosRoutingModule],
  declarations: [TodosComponent],
})
export class TodosModule {}
