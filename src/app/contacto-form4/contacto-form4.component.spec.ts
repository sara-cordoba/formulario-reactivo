import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoForm4Component } from './contacto-form4.component';

describe('ContactoForm4Component', () => {
  let component: ContactoForm4Component;
  let fixture: ComponentFixture<ContactoForm4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoForm4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
