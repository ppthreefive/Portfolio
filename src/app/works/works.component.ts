import { Component } from '@angular/core';

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

  constructor(private window: Window) {
  }

  openGithubPage(keyword: string) {
    switch (keyword) {
      case 'wetha':
        this.window.open('https://github.com/ppthreefive/Wetha-Android-App', '_blank');
        break;
      case 'arctic':
        this.window.open('https://github.com/ppthreefive/Arctic-Sea-Ice-Small-Network-Analyzer-', '_blank');
        break;
    }
  }
}
