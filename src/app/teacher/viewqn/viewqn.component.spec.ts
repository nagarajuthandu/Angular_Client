import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewqnComponent } from './viewqn.component';

describe('ViewqnComponent', () => {
  let component: ViewqnComponent;
  let fixture: ComponentFixture<ViewqnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewqnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewqnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
