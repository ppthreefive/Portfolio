import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output()
  SideNavEmitter: EventEmitter<any> = new EventEmitter<any>();

  sendSideNavEvent() {
    this.SideNavEmitter.emit();
  }
}
