import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@todos-nx/ui';
import { TodosService } from './services/todos.service';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/effects/todos.effects';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    TodosRoutingModule,
    StoreModule.forFeature(fromTodos.todosFeatureKey, fromTodos.reducers, {
      metaReducers: fromTodos.metaReducers,
    }),
    EffectsModule.forFeature([TodosEffects]),
  ],
  declarations: [TodosComponent],
  providers: [TodosService],
})
export class TodosModule {}
