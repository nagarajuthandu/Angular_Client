import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersserachComponent } from './usersserach.component';

describe('UsersserachComponent', () => {
  let component: UsersserachComponent;
  let fixture: ComponentFixture<UsersserachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersserachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersserachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
