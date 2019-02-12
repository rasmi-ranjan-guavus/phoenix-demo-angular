import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLightTheme = false;

  logo = 'guavus-dark.svg';

  title = 'phoenix-demo-angular';

  onThemeButtonClick() {
    const root: HTMLCollection = document.getElementsByTagName('html');

    if (root[0].className.indexOf('light-theme-phoenix') === -1) {
      root[0].className += 'light-theme-phoenix';
      this.logo = 'guavus-light.svg';
    } else {
      root[0].className = '';
      this.logo = 'guavus-dark.svg';
    }



  }
}
