import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsViewComponent } from './assignments-view.component';

describe('AssignmentsViewComponent', () => {
  let component: AssignmentsViewComponent;
  let fixture: ComponentFixture<AssignmentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
