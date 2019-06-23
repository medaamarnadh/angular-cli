import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroReactiveComponent } from './hero-reactive.component';

describe('HeroReactiveComponent', () => {
  let component: HeroReactiveComponent;
  let fixture: ComponentFixture<HeroReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
