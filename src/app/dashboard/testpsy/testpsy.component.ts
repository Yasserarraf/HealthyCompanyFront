import { Component, OnInit } from '@angular/core';
import {TestpsyService} from '../../testpsy.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-testpsy',
  templateUrl: './testpsy.component.html',
  styleUrls: ['./testpsy.component.css']
})
export class TestpsyComponent implements OnInit {

  constructor(private testpsyService:TestpsyService,private router:Router) { }
  testpsies;

  ngOnInit() {
    this.testpsyService.getAlltests()
      .subscribe(data=>{
        this.testpsies=data;
      },err=>{
        console.log(err);
      })
  }

  onGetTest(t: any) {
    let url = t._links.questions.href;
    this.testpsyService.currentTest = t;
    console.log(this.testpsyService.currentTest);
    this.router.navigateByUrl("dashboard/singleTest/"+btoa(url));
  }


}
