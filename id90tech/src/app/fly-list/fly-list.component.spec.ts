import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyListComponent } from './fly-list.component';

describe('FlyListComponent', () => {
  let component: FlyListComponent;
  let fixture: ComponentFixture<FlyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
