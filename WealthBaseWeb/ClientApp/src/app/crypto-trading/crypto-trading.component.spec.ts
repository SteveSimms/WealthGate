import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTradingComponent } from './crypto-trading.component';

describe('CryptoTradingComponent', () => {
  let component: CryptoTradingComponent;
  let fixture: ComponentFixture<CryptoTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoTradingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
