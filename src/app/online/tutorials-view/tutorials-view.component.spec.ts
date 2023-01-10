import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsViewComponent } from './tutorials-view.component';

describe('TutorialsViewComponent', () => {
  let component: TutorialsViewComponent;
  let fixture: ComponentFixture<TutorialsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
