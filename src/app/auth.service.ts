import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  hostAuth:string="http://localhost:8080";
  jwt:string;
  email:string;
  roles:Array<string>;
  firstName:string;

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post(this.hostAuth+"/login",data,{observe:'response'});
  }

  saveToken(jwt: string) {
    localStorage.setItem('token',jwt);
    this.jwt=jwt;
    this.parseJWT();
  }
  parseJWT(){
    let jwtHelper = new JwtHelperService();
    let objJWT= jwtHelper.decodeToken(this.jwt)
    this.email = objJWT.obj;
    this.roles = objJWT.roles;


  }

  isManager(){
    return this.roles.indexOf('ADMIN')>=0;
  }
  isEmployee(){
    return this.roles.indexOf('USER')>=0;
  }
  isAuthenticated(){
    return this.roles;
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }

  initParams() {
    this.jwt=undefined;
    this.email=undefined;
    this.firstName=undefined;
    this.roles=undefined;
  }

  signUp(data: any) {
    let url = this.hostAuth+"/register";
    return this.http.post(url,data);
  }
  getRessource(url){
    return this.http.get(url);
  }
}
