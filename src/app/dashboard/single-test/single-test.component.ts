import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {TestpsyService} from '../../testpsy.service';


@Component({
  selector: 'app-single-test',
  templateUrl: './single-test.component.html',
  styleUrls: ['./single-test.component.css']
})
export class SingleTestComponent implements OnInit {


  constructor(private router:Router,
              private route:ActivatedRoute,private testpsyService:TestpsyService) {
    router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        let url = atob(route.snapshot.params.urlTest);

        this.getQuestions(url);
      }
    });
  }
 reponsesFinal=[];
  questions;
  currentQuestion;
  currentTest;
  testTopic;
  testCompleted = false;
  reponses;
  userSelectedResponse;
  userResponses = [];


  ngOnInit() {

  }
  getQuestions(url){
    this.testpsyService.getRessource(url)
      .subscribe(data=>{
        this.questions=data;
        this.questions = this.questions._embedded.questions;
        for(let i=0 ; i<this.questions.length;i++){
            if(this.questions[i].content==this.questions[i+1].content){
              this.questions.splice(i+1,1)
            }
        }
        this.setData();
        this.questions.forEach(q=>{
          let reponses = this.getResponses(q).then(data=>{
            this.reponsesFinal.push({"question":q,"reponses":this.reponses});
          });
        })
        console.log(this.reponsesFinal);
      },err=>{
        console.log(err);
      })

  }
  setData(){
    this.testTopic = this.testpsyService.getTestTopic();
    if(this.testTopic==undefined){
      let testUrl=this.currentQuestion._links.test.href;
      this.testpsyService.getRessource(testUrl)
        .subscribe(data=>{
          this.currentTest = data;
          this.testTopic = this.currentTest.topic;
        },err=>{
          console.log(err);
        })
    }

  }


  async getResponses(currentQuestion){
    let url = currentQuestion._links.reponses.href;
    await this.testpsyService.getRessource(url).toPromise().then(
      data=>{
        this.reponses=data;

        this.reponses = this.reponses._embedded.reponses;
        for(let i=0 ; i<this.reponses.length;i++){

          if(this.reponses[i].content==this.reponses[i+1].content){
            this.reponses.splice(i+1,1)
          }
        }
      },err=>{
        console.log(err);
      }
    );
    console.log(this.reponses);

  }

  onSelectedResponse(event) {
    this.userSelectedResponse = event.target.value;
    console.log(this.userSelectedResponse);
  }

  finishTest() {
    this.testpsyService.getRessource(this.userSelectedResponse)
      .subscribe(data=>{
        this.userResponses.push(data);
      },err=>{
        console.log(err);
      });
    this.testCompleted = true;
    if(this.testCompleted){
      //post the responses
    }
    this.router.navigateByUrl("dashboard/testpsy");
  }


  async onSmt(data) {
    console.log(data);
    let t =this.testpsyService.getTestUrl();
    let test= await this.testpsyService.getRessource(t).toPromise();
    let data1=[];
    Object.keys(data)
      .forEach(function eachKey(key) {
        console.log(key+" : "+data[key])// alerts key
        data1.push({
          "question":key,
          "reponse":data[key],
        })
      });
      let testCompleted = {"test":test,"reponses":data1};
      this.testpsyService.setCompletedTest(testCompleted);
      this.router.navigateByUrl("dashboard/testpsy");
  }
}
