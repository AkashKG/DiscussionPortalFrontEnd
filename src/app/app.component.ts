import { Component } from '@angular/core';
import { AppService } from './app.service';
import { AppHeaderComponent } from './header/app-header.component';
import { HeaderInternalComponents } from './header/app-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

export const AppInternalComponents = [AppHeaderComponent, HeaderInternalComponents]