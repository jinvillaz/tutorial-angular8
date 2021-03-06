import { Component, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'app-auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  `,
  styleUrls: ['./auth-form.scss']
})
export class AuthFormComponent {

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }

}
