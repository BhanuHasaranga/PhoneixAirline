import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardUserComponent } from './admin-dashboard-user.component';

describe('AdminDashboardUserComponent', () => {
  let component: AdminDashboardUserComponent;
  let fixture: ComponentFixture<AdminDashboardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
