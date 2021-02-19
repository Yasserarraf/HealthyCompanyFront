import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {error} from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  firstName ;
  users;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.firstName = "Employee" ;
    let user = this.authService.roles;
    for(let u of user){
      if(u=="ADMIN"){
        this.firstName="MANAGER";
      }
    }
  }
  isManager(){
    return this.authService.isManager();
  }
  isEmployee(){
    return this.authService.isEmployee();
  }
  logout() {
    localStorage.removeItem('token');
    this.authService.initParams();
    this.router.navigateByUrl("/Home");
  }
  getUsers(){
    let url = this.authService.hostAuth+"/appUsers";
    this.authService.getRessource(url).subscribe(data=>{
      this.users = data;
      }
    )
  }
}
