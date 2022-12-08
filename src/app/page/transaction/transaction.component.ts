import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { formatPrice } from '../../utils/helper';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  transactions: any = [];

  constructor(public api: ApiService) {}

  formatPrices = formatPrice;

  ngOnInit(): void {
    this.api.getTransaction().subscribe(
      (data: any) => {
        console.log(data);
        this.transactions = data.results;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
