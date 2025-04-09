import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "nav-bar",
  templateUrl: "./navbar.component.html",
  imports: [RouterLink, RouterLinkActive],
})
export class NavComponent {}
