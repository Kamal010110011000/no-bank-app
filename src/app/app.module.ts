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
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
