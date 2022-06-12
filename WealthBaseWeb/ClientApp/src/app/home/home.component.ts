import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  template: `<h1> Salam {{greeting}}</h1>
<div class="container">
  <div class="row">
    <table class="table">
      <thead>
      <tr>
        <th>
          Name
        </th>
        <th>
          Price
        </th>
        <th>
          Change
        </th>
        <th>
          Market cap
        </th>
        <th>
          <button class="btn btn-primary">Buy</button>
        </th>
        <th>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
          </svg>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let crypto of cryptoData">
        <td >
          <div class="d-flex justify-content-space-around">
           <div> <img [src]="crypto.logo_url" alt="currency logo" style="height: 32px; width: 32px;"> </div>
            <div class="mx-3">
              <h4> {{crypto.name}}</h4>
              <div>
                {{crypto.symbol}}
              </div>
            </div>
          </div>
        </td>
        <td>
          <div>
            <h4> $ {{formatter.format(crypto.price)}}</h4>
            <div>
              {{crypto.symbol}}
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</div>


  `,
  styles:[`
    .row{
    display: flex;
    justify-content: space-around;
  }`]

})
export class HomeComponent {
  greeting = 'Multiverse';
   NOMICS_KEY = '8d6d783f836ba7978b8a72c04f45b1744fec01e3';
   NOMICS_URL = `https://api.nomics.com/v1/currencies/ticker?key=${this.NOMICS_KEY}&interval=1d,30d&convert=USD&per-page=100&page=1`;

 public cryptoData: NomicsAPIData[] = [];





constructor(private http: HttpClient){
  this.getApiData()
}

getApiData(){
  this.http.get<any>(this.NOMICS_URL).subscribe(result =>{
    this.cryptoData = result;
    console.log('results are in....????',this.cryptoData)
  }, error => console.error(error))
}


 formatter = new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD',
    });
 // formatter.format()
 //  }

//Todo: [x]Call Nomics api
  //Todo[x]: render Api data in a table  //todo: add styling install tailwind find free template initialize git repo
  //todo:[x] comma seperated internationalized monetary format
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
