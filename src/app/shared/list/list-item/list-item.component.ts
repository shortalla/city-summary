import { Component, OnInit, Input } from '@angular/core';
import { CityModel } from '../../../models/city/city.model';

@Component({
  selector: 'cs-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() private city: CityModel;

  constructor() { }

  ngOnInit() { }

  /**
   * The background taken from the image URL
   */
  public backgroundStyle() {
    return {
      'background-image': `url('${this.city.image_url}')`,
    }
  }
}
