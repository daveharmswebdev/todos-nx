import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@todos-nx/ui';
import { TodosService } from './services/todos.service';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './reducers';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    TodosRoutingModule,
    StoreModule.forFeature(fromTodos.todosFeatureKey, fromTodos.reducers, {
      metaReducers: fromTodos.metaReducers,
    }),
  ],
  declarations: [TodosComponent],
  providers: [TodosService],
})
export class TodosModule {}
