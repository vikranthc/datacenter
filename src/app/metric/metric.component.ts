import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {

  @Input() title = '';
  @Input() description = '';
  @Input() used = 0;
  @Input() max = 100;

  constructor() { }

  ngOnInit() {
  }

  isDanger() {
    return this.used / this.max > 0.7;
  }

}
