import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Login } from '../../models/login';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}
  model = new Login('', '');
  submitted = false;
  errormessage = '';

  favoriteColorControl = new FormControl('');
  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.api.login(this.model).subscribe(
      (data: any) => {
        // nyimpan acces_token dan refresh_token
        this.router.navigate(['/mainDashboard-page']);
        localStorage.setItem('TOKEN', data.tokens.access.token);
        localStorage.setItem('USER', JSON.stringify(data.user));
        // dan redirect ke halaman dashboard
        console.log(data);
      },
      (err: any) => {
        console.log(err);
        this.errormessage = err.error.message;
      }
    );
  }
  ngOnInit(): void {}
}
