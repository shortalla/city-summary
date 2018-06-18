import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cs-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  @Input() isDisabled: boolean;
  @Input() primary?: boolean;

  constructor() { }

  ngOnInit() {}

  buttonClass() {
    return {
      'primary': this.primary,
    };
  }
}
