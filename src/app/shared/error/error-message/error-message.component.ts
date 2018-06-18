import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cs-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() isError: boolean;

  constructor() { }

  ngOnInit() { }

  /**
   * Apply an error class if the form is not valid
   */
  errorClass() {
    return {
      'is-error' : this.isError
    }
  }
}
