import { Component } from '@angular/core';
import { MembershipService } from '../membership.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Router } from '@angular/router';
import { FormComponentInterface } from 'src/@types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements FormComponentInterface {
  username: string;
  password: string;

  constructor(
    private fb: FormBuilder,
    private membershipService: MembershipService,
    private router: Router
  ) {}

  form: FormGroup = this.fb.group({
    username: [''],
    password: [''],
  });

  model: any;
  url: string = '/register';

  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      className: '',
      templateOptions: {
        type: 'text',
        placeholder: 'username',
        required: true,
      },
      validation: {
        messages: {
          required: 'Username needs to be set',
        },
      },
    },
    {
      key: 'password',
      type: 'input',
      className: '',
      templateOptions: {
        type: 'password',
        placeholder: 'password',
        required: true,
      },
      validation: {
        messages: {
          required: 'Password needs to be set',
        },
      },
    },
  ];

  submit() {
    this.membershipService.login(
      this.form.get('username').value,
      this.form.get('password').value
    );
    this.router.navigate(['/dashboard']);
  }
}
