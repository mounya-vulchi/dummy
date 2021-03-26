import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyordersComponent } from './myorders/myorders.component';
import { PaymentComponent } from './payment/payment.component';
import { UserComponent } from './user.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'userdashboard', component: UserComponent },
  { path:'usercart', component:UsercartComponent},
  { path:'userprofile',component:UserprofileComponent},
  { path:'wishlist',component:WishlistComponent},
  { path:'myorder', component:MyordersComponent},
  { path:'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
