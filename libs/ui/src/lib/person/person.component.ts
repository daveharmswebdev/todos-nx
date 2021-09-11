import { Component, forwardRef, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { IPerson } from '@todos-nx/data';

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
export class PersonComponent implements ControlValueAccessor, OnDestroy {
  onTouched = () => {};

  onChangeSub!: Subscription;

  formGroup = this.fb.group({
    firstName: '',
    middleInitial: '',
    lastName: '',
    suffix: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnDestroy() {
    this.onChangeSub.unsubscribe();
  }

  writeValue(value: IPerson): void {
    if (value) {
      this.formGroup.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(onChange: any): void {
    this.onChangeSub = this.formGroup.valueChanges.subscribe(onChange);
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.formGroup.valid) {
      return null;
    }
    return {
      invalidForm: { valid: false, message: 'formgroup fileds are invalid' },
    };
  }

  setDisabledState(disabled: boolean) {
    if (disabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }
}
