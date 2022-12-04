import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let auth_token = window.localStorage.getItem('TOKEN');

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${auth_token}`,
});

const requestOptions = { headers: headers };

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(body: any) {
    return this.http.post('https://api.garar.id/v1/auth/login', body);
  }

  getPortofolio() {
    return this.http.get(
      'https://api.garar.id/v1/users/portofolio',
      requestOptions
    );
  }

  getProduct() {
    return this.http.get(
      'https://api.garar.id/v1/products/by-brands?brand=TELKOMSEL&sortBy=total_sold:desc',
      requestOptions
    );
  }
}
