import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponentComponent } from '../../shared/components/navbar-component/navbar-component.component';
import { FooterComponentComponent } from '../../shared/components/footer-component/footer-component.component';
import { ToastComponent } from '../../shared/components/toast/toast.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponentComponent,
    FooterComponentComponent,
    ToastComponent,
  ],
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {}
