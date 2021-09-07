import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDisplayCardComponent } from './todo-display-card/todo-display-card.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [TodoDisplayCardComponent],
  exports: [TodoDisplayCardComponent],
})
export class UiModule {}
