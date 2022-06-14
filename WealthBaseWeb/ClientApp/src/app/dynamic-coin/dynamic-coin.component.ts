import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { map, filter} from 'rxjs/operators';
const log = console.log;
@Component({
  selector: 'app-dynamic-coin',
  template: `
    <ul>

      <li *ngFor="let coin of historyState">
        {{coin}}
      </li>
    </ul>

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
