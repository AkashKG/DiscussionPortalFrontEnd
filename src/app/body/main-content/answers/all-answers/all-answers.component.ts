import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../../app.service';
import { MdSnackBar } from '@angular/material';


@Component({
    selector: 'all-answers',
    templateUrl: './all-answers.component.html',
    providers:[AppService],
    host:{'style':'width:100%'}
})
export class AllAnswersComponent implements OnInit {

    constructor(private _appService:AppService, private _route:ActivatedRoute, public snackBar: MdSnackBar, 
                private router:Router){}
    app = {questionId:""};
    res = {};
    answer='';
    showTextArea = false;
    addAnswerProgress = false;

    ngOnInit() {
        this.getAnswers()
    }

    getAnswers() {
        let questionId = this._route.snapshot.params['id'];
        this._appService.getQuestionDetails(questionId)
                        .subscribe(resAppData => this.app = resAppData);
    }

    onSelect(id) {
        this.router.navigate(['/answer', id]);
    }

    onAddAnswer() {
        this.showTextArea = true;
    }

    onCancel() {
        this.showTextArea = false;
    }

    onSubmitAnswer() {
        this.addAnswerProgress = true;
        console.log(this.answer);
        this._appService.addAnswer(this.answer, this.app.questionId)
        .subscribe(resSubmit => this.openSnackBar(resSubmit.status, "Done"));
    }

    openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
    this.addAnswerProgress = false;
    this.showTextArea = false;
    this.answer = "";
    this.getAnswers();
  }

}

export const AllAnswersInternalComponent = [];
