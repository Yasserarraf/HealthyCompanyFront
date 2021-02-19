import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  onLogin(data) {
    this.authService.login(data)
      .subscribe(resp=>{
        let jwt = resp.headers.get('Authorization');
        this.authService.saveToken(jwt);
        this.router.navigateByUrl("/dashboard");
        console.log();
        },err=>{

      })
  }
}
