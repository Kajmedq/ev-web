import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutespageComponent } from './statutespage.component';

describe('StatutespageComponent', () => {
  let component: StatutespageComponent;
  let fixture: ComponentFixture<StatutespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatutespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatutespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
