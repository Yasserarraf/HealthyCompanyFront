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

  questions;
  currentQuestion;
  questionsLen;
  questionNum;
  testCompleted = false;
  testTopic;
  ngOnInit() {
  }
  getQuestions(url){
    this.testpsyService.getRessource(url)
      .subscribe(data=>{
        this.questions=data;
        this.questions = this.questions._embedded.questions;
        this.setData();
      },err=>{
        console.log(err);
      })
  }
  setData(){
    console.log(this.questions);
    this.currentQuestion = this.questions[0];
    this.questionNum = 1;
    this.questionsLen = this.questions.length;
    this.testTopic = this.testpsyService.getCurrentTest().topic;
    console.log(this.testTopic);
  }
  nextQuestion(){
    if(this.questionsLen > this.questionNum){
      this.currentQuestion = this.questions[this.questionNum];
      this.questionNum++;
      console.log(this.currentQuestion);
    }else{
      this.testCompleted = true;
    }
  }
  previousQuestion(){
    if(this.questionNum > 1 ){
      this.currentQuestion = this.questions[this.questionNum];
      this.questionNum--;
      console.log(this.currentQuestion);
    }
    this.testCompleted = false;
  }
}
