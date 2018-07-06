import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxProgressComponent } from './lx-progress.component';

describe('LxProgressComponent', () => {
  let component: LxProgressComponent;
  let fixture: ComponentFixture<LxProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
