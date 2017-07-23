import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private _appService:AppService){}
    app = [];
    ngOnInit() {
        this._appService.getEmployees()
            .subscribe(resAppData => this.app = resAppData);

        
    }
}
