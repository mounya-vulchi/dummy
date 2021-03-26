import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { AddNewbookComponent } from './add-newbook/add-newbook.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { AvailableCategoriesComponent } from './available-categories/available-categories.component';


@NgModule({
  declarations: [AdminComponent, UsersManagementComponent, AddNewbookComponent, AvailableBooksComponent, AvailableCategoriesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
