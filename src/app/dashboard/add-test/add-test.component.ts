import {Component, ElementRef, OnInit} from '@angular/core';
import {TestpsyService} from '../../testpsy.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {


  constructor(private testpsyService:TestpsyService,private elementRef: ElementRef,private router:Router) {

  }

  navListItems;
  allWells ;
  finalStep = false;
  firstStep = false;
  secondStep = false;
  topic = " ";
  question = " ";
  reponse = " ";
  reponses = [];
  QR=[];
  data=[];

  ngOnInit() {
    this.navListItems= this.elementRef.nativeElement.querySelectorAll("div.setup-panel div a");
    this.allWells = this.elementRef.nativeElement.querySelectorAll(".setup-content");
    this.allWells.forEach(f=>{
      f.classList.add("hide");
    });
    this.allWells[0].classList.remove("hide");
    this.allWells[0].classList.add("show");

  }

  nxtBtn() {
    let url1 = this.testpsyService.host+"/testpsies";
    let currentContent;
    let nextStepBtn;
    this.allWells.forEach(f=>{
      if(f.classList.contains("show")){
        currentContent = f.id;
      }
    })
   let currentStepBtn = this.elementRef.nativeElement.querySelector('.'+currentContent);
    nextStepBtn = this.elementRef.nativeElement.querySelector('.step-'+(parseInt(currentContent.split("-")[1])+1));
    nextStepBtn.click();
      if(this.QR.length>0) {
        this.SaveQR();
        this.data.push(
          {
            "topic": this.topic.trim(),
            "questions": this.QR
          });

      }

  }
  prvBtn() {
    let currentContent;
    let nextStepBtn;
    this.allWells.forEach(f=>{
      if(f.classList.contains("show")){
        currentContent = f.id;
      }
    })
    let currentStepBtn = this.elementRef.nativeElement.querySelector('.'+currentContent);
    nextStepBtn = this.elementRef.nativeElement.querySelector('.step-'+(parseInt(currentContent.split("-")[1])-1));
    nextStepBtn.click();
  }
  handleClick(event,contentNb) {
    var target = event.target;
    if (!target.classList.contains('disabled')) {
      this.navListItems.forEach(f=>{
        f.classList.remove('btn-success');
        f.classList.add('btn-secondary');
      })
      target.classList.add('btn-success');
      this.allWells.forEach(f=>{
        f.classList.remove("show");
        f.classList.add("hide");
      });
      this.allWells[contentNb].classList.remove("hide");
      this.allWells[contentNb].classList.add("show");
      if(contentNb>=2){
        this.finalStep=true;
      }else{
        this.finalStep=false;
      }
      if(contentNb==0){
        this.firstStep=false;
      }else{
        this.firstStep=true;
      }
      if(contentNb==1){
        this.secondStep = true;
      }else{
        this.secondStep = false;
      }
    }
  }

 async FinishBtn(){
    let url1 = this.testpsyService.host+"/testpsies";
    let url2 = this.testpsyService.host+"/questions";
    let url3 = this.testpsyService.host+"/reponses";

  console.log(this.data);

   let test;
    test = await this.testpsyService.postRessource(url1,{"topic":this.data[0].topic}).toPromise();
   console.log(test);
    let question;
   for(const q of this.data[0].questions){
      question = await this.testpsyService.postRessource(url2,{"content":q.content}).toPromise();

      let urlTLink = test._links.questions.href;

     let ts = new Test(test.content,test._links,urlTLink);
     this.testpsyService.editTest(ts,question).subscribe(data=>{
       console.log(data);
     },err=>{});
     for(const r of q.reponses){
       let reponse = await this.testpsyService.postRessource(url3,{"content":r.content}).toPromise();
       console.log("reponse");
       console.log(reponse);
       let urlLink = question._links.reponses.href;
       let qs = new Question(question.content,question._links,urlLink);

       this.testpsyService.editQuestions(qs,reponse).subscribe(data=>{
         console.log(data);
       },err=>{});
     }
   }

  this.router.navigateByUrl("dashboard/testpsy");
  }


  SaveQR() {
    if(this.question!=" "&&this.reponses.length>0){
      let url2 = this.testpsyService.host+"/questions";
      let url3 = this.testpsyService.host+"/reponses";
      let rs = [];
      this.reponses.forEach(r=>{rs.push({"content":r})})

      this.QR.push(
        {
          "content":this.question.trim(),
          "reponses":rs
        }
      );

      this.question=" ";
      this.reponses=[];
    }
  }



  onNewRep() {
    if(this.reponse != " "){
      this.reponses.push(this.reponse.trim());
      this.reponse =" ";
    }
  }


}
export class Question{
   content;
  _links;
  url;

  constructor(content,_links,url){
    this.content = content;
    this._links = _links;
    this.url = url;
  }

  setContent(content){
    this.content = content;
    }
    setLinks(links){
    this._links = links;
    }
    getContent(){
    return this.content;
    }
    getLinks(){
    return this._links;
    }
    setUrl(url){
    this.url = url;
    }
    getUrl(){
    return this.url;
    }
}

export class Test{
  topic;
  _links;
  url;

  constructor(content,_links,url){
    this.topic = content;
    this._links = _links;
    this.url = url;
  }

  setContent(content){
    this.topic = content;
  }
  setLinks(links){
    this._links = links;
  }
  getContent(){
    return this.topic;
  }
  getLinks(){
    return this._links;
  }
  setUrl(url){
    this.url = url;
  }
  getUrl(){
    return this.url;
  }
}
