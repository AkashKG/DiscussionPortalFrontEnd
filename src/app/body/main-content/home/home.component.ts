import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host:{'style':'width:100%'}
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
