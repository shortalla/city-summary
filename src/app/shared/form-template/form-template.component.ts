import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'cs-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {
  @Input() private formGroup: FormGroup;
  @Input() private header: string;

  constructor() { }

  ngOnInit() {}

  /**
   * Whether or not the form is invalid
   * 
   * @param control The form group control
   */
  isError(control: AbstractControl) {
    return !control.valid && control.touched;
  }
}
