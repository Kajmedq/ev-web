import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturespageComponent } from './lecturespage.component';

describe('LecturespageComponent', () => {
  let component: LecturespageComponent;
  let fixture: ComponentFixture<LecturespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
