import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDocenteComponent } from './detalle-docente.component';

describe('DetalleDocenteComponent', () => {
  let component: DetalleDocenteComponent;
  let fixture: ComponentFixture<DetalleDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleDocenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
