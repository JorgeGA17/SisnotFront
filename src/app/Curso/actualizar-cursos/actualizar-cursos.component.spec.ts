import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCursosComponent } from './actualizar-cursos.component';

describe('ActualizarCursosComponent', () => {
  let component: ActualizarCursosComponent;
  let fixture: ComponentFixture<ActualizarCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarCursosComponent]
    });
    fixture = TestBed.createComponent(ActualizarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
