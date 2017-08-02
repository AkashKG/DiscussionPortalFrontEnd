import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../../app.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  providers:[AppService],
  host:{'style':'width:100%'}
})
export class AnswerComponent implements OnInit {

  constructor(private _appService:AppService, private _route:ActivatedRoute, private router:Router) { }

  answer = {answerId:""};

  ngOnInit() {
    let answerId = this._route.snapshot.params['id'];
    this._appService.getAnswerDatails(answerId)
    .subscribe(resAppData => this.answer = resAppData);
  }

  onSelect(id) {
        this.router.navigate(['/question', id]);
  }
}
