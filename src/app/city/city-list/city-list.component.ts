import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api/api.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'cs-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  private list$: Observable<any>;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.list$ = this.apiService.list();
  }

  /**
   * Go to the add city form
   */
  addCity() {
    this.router.navigate(['/cities/add']);
  }
}
