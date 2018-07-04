import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoClienteComponent } from './tipo-cliente.component';

describe('TipoClienteComponent', () => {
  let component: TipoClienteComponent;
  let fixture: ComponentFixture<TipoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
