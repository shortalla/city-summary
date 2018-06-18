import { Component, OnInit, Input } from '@angular/core';
import { CityModel } from '../../models/city/city.model';

@Component({
  selector: 'cs-summary-template',
  templateUrl: './summary-template.component.html',
  styleUrls: ['./summary-template.component.scss']
})
export class SummaryTemplateComponent implements OnInit {
  @Input() city: CityModel;

  constructor() { }

  ngOnInit() {
  }

}
