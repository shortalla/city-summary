import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../core/api/api.service';
import { CityModel } from '../models/city/city.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cs-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.scss']
})
export class CityEditComponent implements OnInit {
  private formGroup: FormGroup;
  private city: CityModel;
  private header: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      () => {
        const params = this.activatedRoute.snapshot.params;
        this.apiService.getCity(
          params.id
        ).toPromise().then(city => this.city = city);
      }
    );
    this.initForm();
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
      image_url: [null],
    });

    this.formGroup.value.title = this.city.title;
    this.formGroup.value.content = this.city.content;
    this.formGroup.value.lat = this.city.lat;
    this.formGroup.value.long = this.city.long;
    this.formGroup.value.image_url = this.city.image_url;
  }

  /**
   * Update the city
   */
  updateCity() {
    const form = this.formGroup.value;
    this.apiService.updateCity(
      form.title,
      form.content,
      form.lat,
      form.long,
      form.image_url
    );
  }
}
