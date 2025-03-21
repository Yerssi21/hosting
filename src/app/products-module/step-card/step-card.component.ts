import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-step-card',
  imports: [CommonModule],
  templateUrl: './step-card.component.html',
  styleUrls: ['./step-card.component.scss'], 
})
export class StepCardComponent {
  @Input() stepNumber!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() duration!: string;
  //@Input() image!: string;
}
