import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BooksInCategoryComponent } from './books-in-category/books-in-category.component';


@NgModule({
  declarations: [HomeComponent, BookdetailsComponent, BooksInCategoryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
