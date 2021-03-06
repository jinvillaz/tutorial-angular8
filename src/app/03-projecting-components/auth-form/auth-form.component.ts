import { Component, Output, EventEmitter } from '@angular/core';

import { User03 } from './auth-form.interface';

@Component({
  selector: 'app-auth-form03',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <div layout="row">
          <ng-content select="h3"></ng-content>
          <label>
            Email address
            <input type="email" name="email" ngModel>
          </label>
          <label>
            Password
            <input type="password" name="password" ngModel>
          </label>
          <div class="auth-remember" flex>
            <ng-content select="app-auth-remember"></ng-content>
          </div>
          <ng-content select="button"></ng-content>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./auth-form.scss']
})
export class AuthForm03Component {

  @Output() submitted: EventEmitter<User03> = new EventEmitter<User03>();

  onSubmit(value: User03): void {
    this.submitted.emit(value);
  }

}
