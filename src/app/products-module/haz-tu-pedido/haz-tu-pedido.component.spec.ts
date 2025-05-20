import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazTuPedidoComponent } from './haz-tu-pedido.component';

describe('HazTuPedidoComponent', () => {
  let component: HazTuPedidoComponent;
  let fixture: ComponentFixture<HazTuPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HazTuPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazTuPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
