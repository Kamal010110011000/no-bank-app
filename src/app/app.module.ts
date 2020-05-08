import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './dashboard/user/user.component';
import { AccountDetailsComponent } from './dashboard/user/account-details/account-details.component';
import { TransferComponent } from './dashboard/user/transfer/transfer.component';
import { SellStockComponent } from './dashboard/user/sell-stock/sell-stock.component';
import { StocksComponent } from './dashboard/stocks/stocks.component';
import { StockListComponent } from './dashboard/stocks/stock-list/stock-list.component';
import { StockDetailsComponent } from './dashboard/stocks/stock-details/stock-details.component';
import { StockHoldersComponent } from './dashboard/stocks/stock-details/stock-holders/stock-holders.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    AccountDetailsComponent,
    TransferComponent,
    SellStockComponent,
    StocksComponent,
    StockListComponent,
    StockDetailsComponent,
    StockHoldersComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
