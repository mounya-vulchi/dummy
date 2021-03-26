import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksInCategoryComponent } from './books-in-category.component';

describe('BooksInCategoryComponent', () => {
  let component: BooksInCategoryComponent;
  let fixture: ComponentFixture<BooksInCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksInCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksInCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
