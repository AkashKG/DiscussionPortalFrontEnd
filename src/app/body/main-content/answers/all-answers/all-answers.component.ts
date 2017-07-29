import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../../app.service';

@Component({
    selector: 'all-answers',
    templateUrl: './all-answers.component.html',
    providers:[AppService],
    host:{'style':'width:100%'}
})
export class AllAnswersComponent implements OnInit {

    constructor(private _appService:AppService, private _route:ActivatedRoute){}
    app = {questionId:""};
    res = {};
    answer='';
    showTextArea = false;
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
    status = '';
    onSubmitAnswer() {
        this.showTextArea = false;
        console.log(this.answer);
        this._appService.addAnswer(this.answer, this.app.questionId)
        .subscribe(resSubmit => this.status = resSubmit);
    }

}

export const AllAnswersInternalComponent = [];
