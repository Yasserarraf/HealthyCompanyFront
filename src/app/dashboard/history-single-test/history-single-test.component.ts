import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TestpsyService} from '../../testpsy.service';
import  {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-history-single-test',
  templateUrl: './history-single-test.component.html',
  styleUrls: ['./history-single-test.component.css']
})



export class HistorySingleTestComponent implements OnInit {

  @ViewChild('htmlData',{static: false}) htmlData: ElementRef;


  testTopic: any;
  testCompleted: any;

  constructor(private testpsyService:TestpsyService) { }

  ngOnInit() {
    this.testCompleted = this.testpsyService.getSingleTestCompleted();
  }

  SavePDF(): void {
    let DATA = document.getElementById('htmlData');
    html2canvas(DATA).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('angular-demo.pdf');
    });
  }
}
