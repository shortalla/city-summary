import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../core/api/api.service';
import { switchMap} from 'rxjs/operators/switchMap';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'cs-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.scss']
})
export class CityEditComponent implements OnInit {
  private formGroup: FormGroup;
  private city;
  private header: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
			params => {
        const id = this.route.snapshot.params.id;
				this.apiService.getCity(id).toPromise().then(
          city => {
            this.city = city;
            this.initForm();
          }
        );
			}
		);
    this.header = 'Add city';
  }

  /**
   * Initialize the form
   */
  initForm() {
    this.formGroup = this.formBuilder.group({
      title: [null, Validators.required],
      content: [null, Validators.required],
      lat: [null],
      long: [null],
      image_url: [null, Validators.required],
    });
    this.reset();
  }

  /**
   * Reset the form data to the initial values
   */
  public reset() {
    this.formGroup.reset({
      title: this.city.title,
      content: this.city.content,
      lat: this.city.lat,
      long: this.city.long,
      image_url: this.city.image_url
    });
  }

  /**
   * Update the city and return to the main view
   */
  public updateCity() {
    const form = this.formGroup.value;
    this.apiService.updateCity(
      this.city.id,
      form.title,
      form.content,
      form.lat,
      form.long,
      form.image_url
    ).toPromise().then(
      success => this.router.navigate(['/cities']),
      error => console.error(error)
    );
  }
}
