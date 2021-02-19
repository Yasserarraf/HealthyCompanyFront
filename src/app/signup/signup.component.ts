import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  onSignUp(data) {
    console.log(data);
    this.authService.signUp(data)
      .subscribe(resp=>{
        this.router.navigateByUrl("/login");
        console.log();
      },err=>{

      })
  }
}
