import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponentComponent } from "./products-module/footer-component/footer-component.component";
import { NavbarComponentComponent } from "./products-module/navbar-component/navbar-component.component";;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FooterComponentComponent, NavbarComponentComponent, ],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss']
})
export class AppComponent {
  title = 'hosting';

  
}
