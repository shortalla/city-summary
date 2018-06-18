import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CityModel } from '../../models/city/city.model';

@Component({
  selector: 'cs-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  private city: CityModel;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
			params => {
        const id = this.route.snapshot.params.id;
				this.apiService.getCity(id).toPromise().then(
          city => this.city = city
        );
			}
		);
  }

  /**
   * Delete this city
   */
  public delete() {
    this.apiService.delete(
      this.city.id
    ).toPromise().then(
      success => this.router.navigate(['/cities']),
      error => console.error(error)
    );
  }

  /**
   * Go to the edit form for this city
   */
  public edit() {
    this.router.navigate(['cities/edit', this.city.id]);
  }

  /**
   * Open the map in a new tab
   */
  public viewMap() {
    window.open(`https://www.google.com/maps/search/?api=1&query=${this.city.lat},${this.city.long}`, '_blank')
  }
}
