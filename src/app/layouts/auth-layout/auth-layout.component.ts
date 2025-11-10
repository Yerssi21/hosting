import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackHomeButtonDirective } from '../../shared/directives/back-home-button.directive';
import { ToastComponent } from '../../shared/components/toast/toast.component';
@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, BackHomeButtonDirective, ToastComponent],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent {}
