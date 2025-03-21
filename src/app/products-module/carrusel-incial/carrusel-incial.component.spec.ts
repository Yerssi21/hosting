import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselIncialComponent } from './carrusel-incial.component';

describe('CarruselIncialComponent', () => {
  let component: CarruselIncialComponent;
  let fixture: ComponentFixture<CarruselIncialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselIncialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselIncialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
