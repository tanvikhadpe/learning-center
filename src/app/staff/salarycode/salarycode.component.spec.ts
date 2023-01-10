import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarycodeComponent } from './salarycode.component';

describe('SalarycodeComponent', () => {
  let component: SalarycodeComponent;
  let fixture: ComponentFixture<SalarycodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarycodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalarycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
