import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {
  constructor(private iconRegistry: any, private sanitizer: DomSanitizer) {
    this.registerSVGIcon('warning_incompatible_indicator', null, 'assets/images/warning-incompatible-indicator.svg');
    this.registerSVGIcon('main_menu', 'svgs/main-menu.svg');
  }

  public registerSVGIcon(iconName: string, fileName: string, filePath?: string) {
    this.iconRegistry.addSvgIcon(
      iconName,
      this.sanitizer.bypassSecurityTrustResourceUrl(filePath ? filePath : 'svgs/' + fileName)
    );
  }
}
