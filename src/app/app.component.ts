import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { NavComponent } from "./components/navbar/navbar.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",

  imports: [NavComponent, FooterComponent, RouterOutlet],
})
export class AppComponent {
  title = "angular";
}
