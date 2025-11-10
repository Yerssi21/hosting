import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselIncialComponent } from '../../products-module/carrusel-incial/carrusel-incial.component';
import { StepsSliderComponent } from '../../products-module/steps-slider/steps-slider.component';
import { HeroSectionComponent } from '../../products-module/hero-section/hero-section.component';
import { EffortlessProductionComponent } from '../../products-module/effortless-production/effortless-production.component';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CarruselIncialComponent,
    StepsSliderComponent,
    HeroSectionComponent,
    EffortlessProductionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.show({
      message: '¡Bienvenido a Laurrvic Shop!',
      type: 'success',
      duration: 3000,
    });
  }
}
