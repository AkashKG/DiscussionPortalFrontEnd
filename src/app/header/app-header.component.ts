import { Component } from '@angular/core';
import { HeaderMenuComponent } from './menu/header-menu.component';
import { HeaderBrandComponent } from './brand/header-brand.component';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {

}

export const HeaderInternalComponents = [HeaderMenuComponent, HeaderBrandComponent]