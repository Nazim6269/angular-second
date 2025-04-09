import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { SignUpComponent } from "./pages/sign-up/signUp.component";

export const routes: Routes = [
  { path: "sign-up", component: SignUpComponent },
  { path: "sign-in", component: SignUpComponent },
  {
    path: "",
    component: HomeComponent,
  },
];
