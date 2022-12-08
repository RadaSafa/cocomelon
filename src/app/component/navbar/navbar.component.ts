import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userObject: any = localStorage && localStorage.getItem('USER');
  user: any = JSON.parse(this.userObject);

  constructor() {}

  ngOnInit(): void {}
}
