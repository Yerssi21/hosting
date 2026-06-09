import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-overview.component.html',
  styleUrls: ['./home-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeOverviewComponent {}
