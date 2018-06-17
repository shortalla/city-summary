import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  isError() {
    return (!this.formGroup.controls['title'].valid
      && this.formGroup.controls['title'].touched);
  }
}
