import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "footer-component",
  templateUrl: "./footer.component.html",
  imports: [RouterLink, RouterLinkActive],
})
export class FooterComponent {}
