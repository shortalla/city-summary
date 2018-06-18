import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../core/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cs-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.scss']
})
export class CityCreateComponent implements OnInit {
  private formGroup: FormGroup;
  private header: string;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
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
      image_url: [null, Validators.required],
    });
  }

  /**
   * Add the city
   */
  addCity() {
    const form = this.formGroup.value;
    this.apiService.createCity(
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
