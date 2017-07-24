import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../../app.service';

@Component({
  selector: 'all-answers',
  templateUrl: './all-answers.component.html',
  providers:[AppService]
})
export class AllAnswersComponent implements OnInit {

    constructor(private _appService:AppService, private _route:ActivatedRoute){}
    app = [];
    ngOnInit() {

        let questionId = this._route.snapshot.params['id'];

        this._appService.getEmployees(questionId)
            .subscribe(resAppData => this.app = resAppData);
    }
}

export const AllAnswersInternalComponent = [];