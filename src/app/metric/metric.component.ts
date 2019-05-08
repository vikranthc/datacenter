import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnInit {

  @Input() used = 0;
  @Input() max = 100;

  constructor() { }

  ngOnInit() {
  }

  isDanger() {
    return this.used / this.max > 0.7;
  }

}
