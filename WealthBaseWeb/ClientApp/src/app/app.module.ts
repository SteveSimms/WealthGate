import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CryptoTradingComponent } from './crypto-trading/crypto-trading.component';
import { DynamicCoinComponent } from './dynamic-coin/dynamic-coin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CryptoTradingComponent,
    DynamicCoinComponent,
    MatNavComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatSliderModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {path: 'trade', component: CryptoTradingComponent, },
      {path: 'price', component: DynamicCoinComponent, },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
      BrowserAnimationsModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
