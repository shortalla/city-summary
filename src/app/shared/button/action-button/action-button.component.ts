import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cs-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  @Input() private isDisabled: boolean;
  @Input() private primary?: boolean;

  constructor() { }

  ngOnInit() {}

  /**
   * Apply a class to change button styling
   */
  buttonClass() {
    return {
      'primary': this.primary,
    };
  }
}
