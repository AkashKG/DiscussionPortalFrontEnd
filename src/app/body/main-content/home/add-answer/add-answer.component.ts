import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../../app.service';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css'],
  providers:[AppService],
  host:{'style':'width:100%'}
})
export class AddAnswerComponent implements OnInit {

  constructor(private _appService:AppService, public snackBar: MdSnackBar) { }

  @ViewChild('addQuestionForm') questionForm; 

  /**
   * Add new question.
   */
  submitNewQuestion() {
    this._appService.addQuestion(this.question)
    .subscribe(resAppData => this.openSnackBar(resAppData.status, "Done"));
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });

    this.question = {};
  }

  question = {};
  ngOnInit() {
    
  }
}
