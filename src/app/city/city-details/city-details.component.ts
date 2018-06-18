import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'cs-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  city;
  id: number;
  notFound: boolean;
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiService) { }

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

  delete() {
    this.apiService.delete(
      this.city.id
    ).toPromise().then(
      success => this.router.navigate(['/cities']),
      error => console.error(error)
    );
  }

  edit() {
    this.router.navigate(['cities/edit', this.city.id]);
  }

  viewMap() {
    window.open(`https://www.google.com/maps/search/?api=1&query=${this.city.lat},${this.city.long}`, '_blank')
  }
}
