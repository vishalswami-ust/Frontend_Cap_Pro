import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProgressComponent } from './user-progress.component';

describe('UserProgressComponent', () => {
  let component: UserProgressComponent;
  let fixture: ComponentFixture<UserProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
