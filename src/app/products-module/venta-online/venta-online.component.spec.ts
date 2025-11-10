import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaOnlineComponent } from './venta-online.component';

describe('VentaOnlineComponent', () => {
  let component: VentaOnlineComponent;
  let fixture: ComponentFixture<VentaOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentaOnlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
