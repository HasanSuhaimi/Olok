import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMComponent } from './dashboard-m.component';

describe('DashboardMComponent', () => {
  let component: DashboardMComponent;
  let fixture: ComponentFixture<DashboardMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
