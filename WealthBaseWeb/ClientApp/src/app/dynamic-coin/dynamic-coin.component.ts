import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { map, filter} from 'rxjs/operators';
const log = console.log;
@Component({
  selector: 'app-dynamic-coin',
  template: `


    <div  *ngFor="let coin of historyState" class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card">
          <img
            [src]="coin?.logo_url"
            style="height: 32px; width: 32px;"
            class="card-img-top" alt="...">
          <h4>{{coin?.name}}</h4>
          <p>{{coin?.symbol}}</p>
          <div class="card-body">
            <h5 class="card-title"> {{coin.name}}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DynamicCoinComponent implements OnInit {

  crypto: any;
  historyState: any[] = [];
  constructor(router: Router, private activatedRoute: ActivatedRoute) {
    log(router.getCurrentNavigation()?.extras.state);
    log('checking dynamicCryptoData',this.crypto)

  }

  // ngOnInit(): void {
  // }

  ngOnInit(){

    this.crypto = history.state;
    this.historyState.push(history.state)
    log(history.state)

  }

}
