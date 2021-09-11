import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@todos-nx/ui';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TodosService } from './services/todos.service';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './store/reducers/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/effects/todos.effects';
import { metaReducers } from '../reducers';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    TodosRoutingModule,
    StoreModule.forFeature('todosFeature', fromTodos.reducer, {
      metaReducers: metaReducers,
    }),
    EffectsModule.forFeature([TodosEffects]),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [TodosComponent, TodoFormComponent],
  providers: [TodosService],
})
export class TodosModule {}
