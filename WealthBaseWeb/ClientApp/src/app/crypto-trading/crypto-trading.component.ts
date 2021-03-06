import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-crypto-trading',
  template: `
    <div class="container">
      <div class="row">
        <table class="table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <!--        <th>-->
            <!--          Change-->
            <!--        </th>-->
            <th>Market cap</th>
            <th></th>
            <th>Watch</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let crypto of cryptoData">
            <td>
              <div class="d-flex justify-content-space-around">
                <div>
                  <img
                    [src]="crypto.logo_url"
                    alt="currency logo"
                    style="height: 32px; width: 32px;"
                  />
                </div>
                <div class="mx-3">
                  <h4><a [routerLink]="['/price']" [state] = crypto class="text-black" style="text-decoration: none">{{ crypto.name }}</a></h4>
                  <div>
                    {{ crypto.symbol }}
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div>
                <h4>{{ formatter.format(crypto.price) }}</h4>
                <!--            <div>-->
                <!--              {{crypto.symbol}}-->
                <!--            </div>-->
              </div>
            </td>
            <!--        <td>-->
            <!--          <div>-->
            <!--            <h4>{{crypto.price_change}}</h4>-->
            <!--          </div>-->
            <!--        </td>-->

            <td>
              <div>
                <h4>{{ formatter.format(crypto.market_cap).toString() }}</h4>
              </div>
            </td>

            <td>
              <div>
                <button class="btn btn-primary">Buy</button>
              </div>
            </td>
            <td>
              <div>
                <svg
                  fill="none"
                  height="23"
                  viewBox="0 0 24 23"
                  width="24"
                  filled="1"
                  color="var(--primary)"
                  focusable="false"
                  aria-hidden="true"
                  class="WatchStar__StarIcon-sc-1x0suc9-4 bxTlIr"
                >
                  <path
                    d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 01.44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 01-1.152.837L12 18.787l-5.938 3.121a.795.795 0 01-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 01.44-1.354l6.638-.965 2.968-6.015a.795.795 0 011.425 0z"
                    stroke="#becada"
                  ></path>
                </svg>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [
    `
      .row {
        display: flex;
        justify-content: space-around;
      }
      .bxTlIr {
        /*fill: <color> =  rbga(#1b6ec2);>*/
        stroke-width: 1px;
        cursor: pointer;
      }
    `,
  ],
})
export class CryptoTradingComponent implements OnDestroy, OnInit{
  log = console.log;
  greeting = 'Multiverse';
  NOMICS_KEY = '8d6d783f836ba7978b8a72c04f45b1744fec01e3';
  NOMICS_URL = `https://api.nomics.com/v1/currencies/ticker?key=${this.NOMICS_KEY}&interval=1d,30d&convert=USD&per-page=100&page=1`;

  public cryptoData: NomicsAPIData[] = [];
  private _apiSubscription: Subscription | undefined;


  constructor(private http: HttpClient, router: Router, private activatedRoute: ActivatedRoute) {
    this.log(router.getCurrentNavigation()?.extras.state);
    // this.getApiData();
  }

  getApiData() {
    this._apiSubscription =
    this.http.get<any>(this.NOMICS_URL).subscribe(
      (result) => {
        this.cryptoData = result;
        console.log('results are in....????', this.cryptoData);
      },
      (error) => console.error(error)
    );
  }
ngOnDestroy(){
    this._apiSubscription?.unsubscribe();
}
ngOnInit(){
  this.getApiData();

}
  formatNumber(value: any) {
    this.formatter = new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD',
    });
  }
  formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  });
  crypto = this.cryptoData;
  roundAccurately = (num: any, decimalPlaces: any) =>
    Number(
      Math.round(Number(num + 'e' + decimalPlaces)) + 'e-' + decimalPlaces
    );


  gotoDynamic() {
    //this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
    // this.router.navigateByUrl('/dynamic', { state: this.cryptoData });
  }

}








interface NomicsAPIData {
  circulating_supply: number;
  currency: number;
  first_candle: Date;
  first_order_book: Date;
  first_trade: Date;
  high: number;
  high_timestamp: Date;
  id: string;
  logo_url: string;
  market_cap: number;
  market_cap_dominance: number;
  max_supply: number;
  name: number;
  num_exchanges: number;
  num_pairs: number;
  num_pairs_unmapped: number;
  price: number;
  price_date: Date;
  price_timestamp: Date;
  rank: number;
  rank_delta: number;
  status: string;
  symbol: string;
  price_change: number;
}
