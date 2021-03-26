import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewbookComponent } from './add-newbook.component';

describe('AddNewbookComponent', () => {
  let component: AddNewbookComponent;
  let fixture: ComponentFixture<AddNewbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
