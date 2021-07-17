import { Component } from '@angular/core';
import { IconRegistryService } from './services/icon-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLightTheme = false;

  logo = 'guavus-light.svg';

  title = 'phoenix-demo-angular';

  constructor() {
  }

  onThemeButtonClick() {
    const root: HTMLCollection = document.getElementsByTagName('html');

    if (root[0].className.indexOf('light-theme-phoenix') === -1) {
      root[0].className += 'light-theme-phoenix';
      this.logo = 'guavus-dark.svg';
    } else {
      root[0].className = '';
      this.logo = 'guavus-light.svg';
    }



  }
}
