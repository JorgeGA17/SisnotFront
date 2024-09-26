import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDocenteComponent } from './actualizar-docente.component';

describe('ActualizarDocenteComponent', () => {
  let component: ActualizarDocenteComponent;
  let fixture: ComponentFixture<ActualizarDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarDocenteComponent]
    });
    fixture = TestBed.createComponent(ActualizarDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
