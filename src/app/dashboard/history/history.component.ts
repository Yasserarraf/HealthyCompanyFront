import { Component, OnInit } from '@angular/core';
import {TestpsyService} from '../../testpsy.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  testpsiesCompleted: any;

  constructor(private testpsyService:TestpsyService,private router:Router) { }

  ngOnInit() {
    this.testpsiesCompleted = this.testpsyService.getCompletedTest();
  }

  onGetTest(t: any) {
    // let url = t._links.questions.href;
    // this.testpsyService.setTestUrl(t._links.self.href);
    // this.testpsyService.setTestTopic(t.topic);
    this.testpsyService.setSingleTestCompleted(t);

    this.router.navigateByUrl("dashboard/historySingleTest");
  }
}
