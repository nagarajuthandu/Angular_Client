import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateqnComponent } from './updateqn.component';

describe('UpdateqnComponent', () => {
  let component: UpdateqnComponent;
  let fixture: ComponentFixture<UpdateqnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateqnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateqnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
