import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api/api.service';
import { CityModel } from '../models/city/city.model';
import { map } from 'rxjs/operator/map';

@Component({
  selector: 'cs-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  city;
  id;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.id = 7;
    this.load();
  }

  load() {
    this.city = this.apiService.getCity(this.id).toPromise().then(
      (city) => this.city = city
    );
  }

  delete() {
    this.apiService.delete(this.city.id);
  }

  previous() {
    this.id = this.id - 1;
    this.load();
  }

  next() {
    this.id = this.id + 1;
    this.load();
  }
}
