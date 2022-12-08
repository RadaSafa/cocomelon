import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

import { formatPrice } from '../../utils/helper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any = [];

  constructor(public api: ApiService, private router: Router) {}
  formatPrices = formatPrice;

  onBuy(product: any) {
    console.log(product);
    localStorage.setItem('PRODUCT', JSON.stringify(product));
    this.router.navigate(['buy-page'], {
      queryParams: { page: 1 },
    });
  }

  ngOnInit(): void {
    this.api.getProduct().subscribe(
      (data: any) => {
        this.products = data.results;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
