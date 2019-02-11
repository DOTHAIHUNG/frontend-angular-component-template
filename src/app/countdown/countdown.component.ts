import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  private intervalId = 0;
  message = '';
  remaingTime: number;
  @Input() seconds = 20;

  clearTime() {
    clearInterval(this.intervalId);
  }

  constructor() {
  }

  ngOnInit() {
    this.reset();
    this.start();
  }

  ngOnDestroy() {
    this.clearTime();
  }

  reset() {
    this.clearTime();
    this.remaingTime = this.seconds;
    this.message = 'Click start button to start Countdown';
  }

  start() {
    this.countDown();
    if (this.remaingTime <= 0) {
      this.remaingTime = this.seconds;
    }
  }

  private countDown() {
    this.clearTime();
    this.intervalId = window.setInterval(() => {
      this.remaingTime -= 1;
      if (this.remaingTime === 0) {
        this.message = 'Blast off!!!';
        this.clearTime();
      } else {
        this.message = `${this.remaingTime} seconds and counting`;
      }
    }, 1000);
  }

  stop() {
    this.clearTime();
    this.message = `Stop at ${this.remaingTime} seconds`;
  }
}
