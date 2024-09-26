import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarNotaComponent } from './registar-nota.component';

describe('RegistarNotaComponent', () => {
  let component: RegistarNotaComponent;
  let fixture: ComponentFixture<RegistarNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarNotaComponent]
    });
    fixture = TestBed.createComponent(RegistarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
