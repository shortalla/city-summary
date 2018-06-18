import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'cs-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() header: string;

  constructor() { }

  ngOnInit() {}

  isError(control: AbstractControl) {
    return !control.valid && control.touched;
  }
}
