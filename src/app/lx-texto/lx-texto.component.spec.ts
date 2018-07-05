import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxTextoComponent } from './lx-texto.component';

describe('LxTextoComponent', () => {
  let component: LxTextoComponent;
  let fixture: ComponentFixture<LxTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
