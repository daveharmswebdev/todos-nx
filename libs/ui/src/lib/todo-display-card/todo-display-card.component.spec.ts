import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDisplayCardComponent } from './todo-display-card.component';

describe('TodoDisplayCardComponent', () => {
  let component: TodoDisplayCardComponent;
  let fixture: ComponentFixture<TodoDisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDisplayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
