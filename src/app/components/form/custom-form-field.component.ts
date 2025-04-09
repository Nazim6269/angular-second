import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "custom-form-field",
  templateUrl: "./custom-form-field.component.html",
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgIf,
  ],
})
export class CustomFormField {
  @Input() label!: string;
  @Input() inputType!: string;
  @Input() controlName!: string;
  @Input() formGroup!: FormGroup;

  hasError(controlName: string, errorName: string): boolean | undefined {
    const control = this.formGroup.get(controlName);

    return control?.touched && control.hasError(errorName);
  }
}
