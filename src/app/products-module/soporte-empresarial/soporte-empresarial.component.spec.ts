import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteEmpresarialComponent } from './soporte-empresarial.component';

describe('SoporteEmpresarialComponent', () => {
  let component: SoporteEmpresarialComponent;
  let fixture: ComponentFixture<SoporteEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoporteEmpresarialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoporteEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
