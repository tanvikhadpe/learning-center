import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkViewComponent } from './homework-view.component';

describe('HomeworkViewComponent', () => {
  let component: HomeworkViewComponent;
  let fixture: ComponentFixture<HomeworkViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeworkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
