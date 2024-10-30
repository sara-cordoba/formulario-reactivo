import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoForm2Component } from './contacto-form2.component';

describe('ContactoForm2Component', () => {
  let component: ContactoForm2Component;
  let fixture: ComponentFixture<ContactoForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoForm2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
