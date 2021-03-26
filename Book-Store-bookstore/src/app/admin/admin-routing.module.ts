import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewbookComponent } from './add-newbook/add-newbook.component';
import { AdminComponent } from './admin.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { AvailableCategoriesComponent } from './available-categories/available-categories.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path:'addbook',component:AddNewbookComponent},
  { path:'all books',component:AvailableBooksComponent},
  { path:'categories', component:AvailableCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
