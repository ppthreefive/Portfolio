import {Component} from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  opened: boolean = false;

  public routeLinks = [
    { id: "top", name: "Home"},
    { id: "about", name: "About Me"},
    { id: "resume", name: "Resume"},
    { id: "works", name: "Works"},
    { id: "contact", name: "Contact"}
  ];

  scrollTo(id: any) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior:"smooth"});
  }
}
