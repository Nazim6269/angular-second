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
import { CustomFormField } from "../../components/form/custom-form-field.component";

@Component({
  selector: "sign-up",
  templateUrl: "./signUp.component.html",
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,

    CustomFormField,
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
}
