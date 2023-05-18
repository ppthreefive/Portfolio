import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output()
  SideNavEmitter: EventEmitter<any> = new EventEmitter<any>();

  sendSideNavEvent() {
    this.SideNavEmitter.emit();
  }

  scrollTo(id: any) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior:"smooth"});
  }
}
