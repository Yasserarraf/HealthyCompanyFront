import {Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HealtyCompanyFront';

  constructor(private authService:AuthService,private toastr: ToastrService,private router:Router) {}


  ngOnInit(): void {
    this.authService.loadToken();
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  isManager(){
    return this.authService.isManager();
  }
  isEmployee(){
    return this.authService.isEmployee();
  }
  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  logout() {
    localStorage.removeItem('token');
    this.authService.initParams();
  }
}
