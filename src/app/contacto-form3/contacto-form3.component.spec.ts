import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoForm3Component } from './contacto-form3.component';

describe('ContactoForm3Component', () => {
  let component: ContactoForm3Component;
  let fixture: ComponentFixture<ContactoForm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoForm3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
