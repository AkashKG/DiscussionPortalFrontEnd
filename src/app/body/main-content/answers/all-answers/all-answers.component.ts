import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../../app.service';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'all-answers',
    templateUrl: './all-answers.component.html',
    providers:[AppService],
    host:{'style':'width:100%'}
})
export class AllAnswersComponent implements OnInit {

    constructor(private _appService:AppService, private _route:ActivatedRoute, public snackBar: MdSnackBar){}
    app = {questionId:""};
    res = {};
    answer='';
    showTextArea = false;
    addAnswerProgress = false;

    ngOnInit() {

        let questionId = this._route.snapshot.params['id'];

        this._appService.getQuestionDetails(questionId)
            .subscribe(resAppData => this.app = resAppData);
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
  }

}

export const AllAnswersInternalComponent = [];
