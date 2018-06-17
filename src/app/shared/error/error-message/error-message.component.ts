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

  errorClass(controls) {
    return {
      'is-error' : this.isError
    }
  }
}
