import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  portofolio: any = {};
  userObject: any = localStorage && localStorage.getItem('USER');
  user: any = JSON.parse(this.userObject);

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    console.log(this.user);
    this.api.getPortofolio().subscribe(
      (data: any) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
