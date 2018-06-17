import { Component, OnInit, Input } from '@angular/core';
import { CityModel } from '../../../models/city/city.model';

@Component({
  selector: 'cs-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() city: CityModel;

  constructor() { }

  ngOnInit() { }

  iconStyle() {
    return {
      'background-image': `url('${this.city.image_url}')`,
    }
  }
}
