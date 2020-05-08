import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { UserProductComponent } from './user/dashboard/user-product/user-product.component';
import { UserOrdersComponent } from './user/dashboard/user-orders/user-orders.component';
import { UserHistoryComponent } from './user/dashboard/user-history/user-history.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ProductHoldersComponent } from './product/product-list/product-holders/product-holders.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    DashboardComponent,
    ProductComponent,
    UserProductComponent,
    UserOrdersComponent,
    UserHistoryComponent,
    ProductListComponent,
    ProductDetailComponent,
    CreateUserComponent,
    ProductHoldersComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
