import {Component} from '@angular/core';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  scrollToAbout(id: any) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior:"smooth"});
  }

  directToEmail() {
    location.href = "mailto:ppthreefive@gmail.com";
  }
}
