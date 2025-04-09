import { NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "sign-up",
  templateUrl: "./signUp.component.html",
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    NgIf,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  private formBuilder = inject(FormBuilder);

  signUpForm: FormGroup = this.formBuilder.group({
    firstName: [
      "",
      [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
    ],
    lastName: [
      "",
      [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
    ],
    password: [
      "",
      [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
    ],
  });

  onSubmit() {
    console.log(this.signUpForm.value);
  }

  hasError(controlName: string, errorName: string): boolean | undefined {
    const control = this.signUpForm.get(controlName);

    return control?.touched && control.hasError(errorName);
  }
}
