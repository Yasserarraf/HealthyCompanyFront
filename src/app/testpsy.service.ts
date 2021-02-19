import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Question,Test} from './dashboard/add-test/add-test.component';

@Injectable({
  providedIn: 'root'
})
export class TestpsyService {

  public host:string="http://localhost:8087";

  constructor(private http:HttpClient,private authService:AuthService) { }
  testTopic;
  testurl;
  testsCompleted = [];
  singletestCompleted;
setTestUrl(url){
  this.testurl = url;

}
getTestUrl(){
  console.log(this.testurl);
  return this.testurl;
}
  getAlltests(){
    return this.http.get(this.host+"/testpsies");
  }
  getRessource(url){
    return this.http.get(url);
  }
  getTestTopic(){
    return this.testTopic;
  }
  setTestTopic(topic){
    this.testTopic =  topic;
  }
  postRessource(url,data){
    let header = new HttpHeaders({'authorization':'Bearer '+this.authService.jwt});
    return this.http.post(url,data,{headers:header});
  }
  putRessource(url,data){
    let header = new HttpHeaders({'authorization':'Bearer '+this.authService.jwt});
    return this.http.put(url,data,{headers:header});
  }
  patchRessource(url,data){
    let header = new HttpHeaders({'authorization':'Bearer '+this.authService.jwt});
    return this.http.patch(url,data,{headers:header});
  }
  deleteRessource(url){
    let header = new HttpHeaders({'authorization':'Bearer '+this.authService.jwt});
    return this.http.delete(url,{headers:header});
  }


  editQuestions(question:Question, reponse) {
    let header = new HttpHeaders({'authorization':'Bearer '+this.authService.jwt});
    let url = question.getUrl();
    return this.http.post(url,reponse,{headers:header});
  }

  editTest(ts: Test, question) {
    let header = new HttpHeaders({'authorization':'Bearer '+this.authService.jwt});
    let url = ts.getUrl();
    return this.http.post(url,question,{headers:header});
  }
  setCompletedTest(t){
    this.testsCompleted.push(t);
    console.log(this.testsCompleted);
  }
  getCompletedTest(){
    return this.testsCompleted;
  }

  setSingleTestCompleted(t: any) {
    this.singletestCompleted = t;
  }
  getSingleTestCompleted(){
  return this.singletestCompleted;
  }
}

