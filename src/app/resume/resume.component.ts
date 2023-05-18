import {Component, HostListener} from '@angular/core';
import * as moment from "moment/moment";
import * as humanizeDuration from "humanize-duration";

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  step: number;
  isMobile: boolean;

  constructor() {
    this.onResize();
  }

  @HostListener("window:resize", [])
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }

  countYears(dateOne: string, dateTwo: string | null): string {
    let dateEnd: moment.Moment;
    let dateStart: moment.Moment;

    if (dateTwo === null) {
      dateEnd = moment();
      dateStart = moment(dateOne);
      return humanizeDuration(moment.duration(dateEnd.diff(dateStart)).asMilliseconds(), {largest: 2, round: true});
    }
    else {
      dateEnd = moment(dateTwo);
      dateStart = moment(dateOne);
      return humanizeDuration(moment.duration(dateEnd.diff(dateStart)).asMilliseconds(), {largest: 2, round: true});
    }
  }

  setStep(index: number) {
    this.step = index;
  }

  downloadResume() {
    let link = document.createElement("a");
    link.download = "PhillipPham_Resume";
    link.href = "assets/resume/PhillipPham_Resume.pdf";
    link.click();
  }
}
