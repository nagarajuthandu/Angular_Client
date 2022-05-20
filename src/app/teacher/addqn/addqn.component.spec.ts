import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqnComponent } from './addqn.component';

describe('AddqnComponent', () => {
  let component: AddqnComponent;
  let fixture: ComponentFixture<AddqnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddqnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddqnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
