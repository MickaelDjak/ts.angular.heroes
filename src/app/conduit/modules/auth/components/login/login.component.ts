import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {ErrorReportInterface} from '../../../../shered/types/errorReport.interface';
import {select, Store} from '@ngrx/store';
import {isSubmittingSelector, validationMessageSelector} from '../../store/selectors';
import {loginAction} from '../../store/actions/login.action';
import {LoginRequestInterface} from '../../types/loginRequest.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  fg: FormGroup;

  isSubmitting$: Observable<boolean>;
  validationMessages$: Observable<ErrorReportInterface>;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeForm(): void {
    this.fg = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationMessages$ = this.store.pipe(select(validationMessageSelector));
  }

  onSubmit(): void {
    const loginRequest: LoginRequestInterface = {user: this.fg.value};
    this.store.dispatch(loginAction({request: loginRequest}));
  }
}
