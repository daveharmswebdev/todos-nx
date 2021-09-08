import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@todos-nx/ui';
import { TodosService } from './services/todos.service';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [CommonModule, UiModule, TodosRoutingModule],
  declarations: [TodosComponent],
  providers: [TodosService],
})
export class TodosModule {}
