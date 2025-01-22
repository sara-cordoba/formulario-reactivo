import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoForm5Component } from './contacto-form5.component';

describe('ContactoForm5Component', () => {
  let component: ContactoForm5Component;
  let fixture: ComponentFixture<ContactoForm5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoForm5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoForm5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
