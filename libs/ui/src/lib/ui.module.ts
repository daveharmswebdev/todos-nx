import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDisplayCardComponent } from './todo-display-card/todo-display-card.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PersonComponent } from './person/person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [TodoDisplayCardComponent, PersonComponent],
  exports: [MaterialModule, TodoDisplayCardComponent, PersonComponent],
})
export class UiModule {}
