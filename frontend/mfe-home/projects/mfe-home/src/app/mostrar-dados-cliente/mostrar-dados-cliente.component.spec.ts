import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDadosClienteComponent } from './mostrar-dados-cliente.component';

describe('MostrarDadosClienteComponent', () => {
  let component: MostrarDadosClienteComponent;
  let fixture: ComponentFixture<MostrarDadosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDadosClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDadosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
