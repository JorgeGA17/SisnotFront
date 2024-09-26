import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAlumnosComponent } from './registrar-alumnos.component';

describe('RegistrarAlumnosComponent', () => {
  let component: RegistrarAlumnosComponent;
  let fixture: ComponentFixture<RegistrarAlumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarAlumnosComponent]
    });
    fixture = TestBed.createComponent(RegistrarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
