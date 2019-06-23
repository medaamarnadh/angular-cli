import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadLinesComponent } from './head-lines.component';

describe('HeadLinesComponent', () => {
  let component: HeadLinesComponent;
  let fixture: ComponentFixture<HeadLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
