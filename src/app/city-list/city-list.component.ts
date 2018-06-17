import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api/api.service';
import { Observable } from 'rxjs/Observable';
import { CityModel } from '../models/city/city.model';

@Component({
  selector: 'cs-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  list: Observable<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.list = this.apiService.list();
  }
}
