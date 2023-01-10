import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeViewComponent } from './fee-view.component';

describe('FeeViewComponent', () => {
  let component: FeeViewComponent;
  let fixture: ComponentFixture<FeeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
