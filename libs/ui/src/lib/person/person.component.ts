import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { IPerson } from '@todos-nx/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'todos-nx-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PersonComponent),
      multi: true,
    },
  ],
})
export class PersonComponent implements ControlValueAccessor {
  onTouched = () => {};

  onChangeSub!: Subscription;

  formGroup = this.fb.group({
    firstName: ['', Validators.required],
    middleInitial: '',
    lastName: ['', Validators.required],
    suffix: '',
  });

  constructor(private fb: FormBuilder) {}

  writeValue(value: IPerson): void {
    if (value) {
      this.formGroup.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(onChange: any): void {
    this.onChangeSub.add(this.formGroup.valueChanges.subscribe(onChange));
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    if (disabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }
}
