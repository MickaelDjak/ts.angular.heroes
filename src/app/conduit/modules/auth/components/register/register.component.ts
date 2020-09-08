import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {registerAction} from '../../store/actions/register.action';
import {isSubmittingSelector, validationMessageSelector} from '../../store/selectors';
import {AuthService} from '../../services/auth.service';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';
import {ErrorReportInterface} from '../../../../shered/types/errorReport.interface';

@Component({
  selector: 'con-auth-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  fg: FormGroup;

  isSubmitting$: Observable<boolean>;
  validationMessages$: Observable<ErrorReportInterface>;

  constructor(private fb: FormBuilder, private authService: AuthService, private store: Store) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.fg = this.fb.group({
      username: ['', [Validators.required, Validators.min(5)]],
      email: ['', [Validators.required, Validators.email, Validators.min(5)]],
      password: ['', [Validators.required, Validators.min(4)]],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationMessages$ = this.store.pipe(select(validationMessageSelector));

  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {user: this.fg.value};
    this.store.dispatch(registerAction({request}));
  }
}
