import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxModalComponent } from './lx-modal.component';

describe('LxModalComponent', () => {
  let component: LxModalComponent;
  let fixture: ComponentFixture<LxModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
