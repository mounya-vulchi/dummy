import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCategoriesComponent } from './available-categories.component';

describe('AvailableCategoriesComponent', () => {
  let component: AvailableCategoriesComponent;
  let fixture: ComponentFixture<AvailableCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
