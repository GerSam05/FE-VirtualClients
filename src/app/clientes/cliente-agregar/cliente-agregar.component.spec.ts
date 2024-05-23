import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAgregarComponent } from './cliente-agregar.component';

describe('ClienteAgregarComponent', () => {
  let component: ClienteAgregarComponent;
  let fixture: ComponentFixture<ClienteAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteAgregarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
