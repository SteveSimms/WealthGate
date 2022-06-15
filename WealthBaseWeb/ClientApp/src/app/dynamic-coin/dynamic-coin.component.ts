import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { map, filter} from 'rxjs/operators';
const log = console.log;
@Component({
  selector: 'app-dynamic-coin',
  template: `


    <mat-card *ngFor="let coin of historyState" class="row row-cols-1 row-cols-md-2 g-4 text-center">
            <div class="col">
          <img
            mat-card-md-image
            [src]="coin?.logo_url"
            class="card-img-top" alt="...">
          <mat-card-title>{{coin?.name}}</mat-card-title>
          <mat-card-subtitle>{{coin?.symbol}} $ {{coin.price}}</mat-card-subtitle>

          <mat-card-content >
            <mat-card-title class="card-title"> {{coin.name}}</mat-card-title>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </mat-card-content>
            </div>

    </mat-card>
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
