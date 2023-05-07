import {Component} from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  opened: boolean = false;

  public routeLinks = [
    { link: "home", name: "Home", icon: "home" },
    { link: "resume", name: "Resume", icon: "person" },
    { link: "works", name: "Works", icon: "insert_drive_file" },
    { link: "contact", name: "Contact", icon: "email" },
  ];
}
