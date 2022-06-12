import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  template: `<h1> Salam {{greeting}}</h1>
  <ul>

    <li *ngFor="let crypto of cryptoData"> {{crypto.name}} {{crypto.logo_url}}</li>
  </ul>


  `

})
export class HomeComponent {
  greeting = 'Multiverse';
   NOMICS_KEY = '8d6d783f836ba7978b8a72c04f45b1744fec01e3';
   NOMICS_URL = `https://api.nomics.com/v1/currencies/ticker?key=${this.NOMICS_KEY}&interval=1d,30d&convert=USD&per-page=100&page=1`;

 public cryptoData: NomicsAPIData[] = [];


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<any>( this.NOMICS_URL).subscribe(result => {
      this.cryptoData = result;
      console.log('results are in....????',this.cryptoData)
    }, error => console.error(error));
  }




//Todo: [x]Call Nomics api
  //Todo[]: render Api data in a table  //todo: add styling install tailwind find free template initialize git repo

  //todo:[] break out into seperate component if needed
  //todo:[] Grok nav flow on coin (click) user should be navigated to a currency details page dynamiclly
  //todo:[] grok auth flow
  //todo:[] create watchlist model
  // save[] currency on click to watchlist model
  //Todo:[] READ watchlist and display on page
}
interface NomicsAPIData {
  circulating_supply: number
  currency: number
  first_candle: Date
  first_order_book: Date
  first_trade: Date
  high: number
  high_timestamp: Date
  id: string;
  logo_url: string;
  market_cap: number
  market_cap_dominance: number
  max_supply: number
  name: number;
  num_exchanges: number
  num_pairs: number
  num_pairs_unmapped: number
  price: number
  price_date: Date
  price_timestamp: Date
  rank: number
  rank_delta: number
  status: string
  symbol: string;
}
