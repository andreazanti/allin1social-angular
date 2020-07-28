import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MembershipService } from '../membership.service';
import { FormBuilder, FormGroup, Form } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import User from '../../../models/user';
import { Router } from '@angular/router';
import { FormComponentInterface, SubmitData } from 'src/@types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, FormComponentInterface {
  @Output() onSubmit: EventEmitter<SubmitData> = new EventEmitter<SubmitData>();

  url: string = '/auth';

  // Indicates all the validations here
  form: FormGroup = this.fb.group({
    username: [''],
    password: [''],
  });

  model = User;

  //TODO: try to add custom html before every input of the form

  // This can be defined in other file too
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

  constructor(
    private membershipService: MembershipService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginWithSocial(socialProvider: 'facebook' | 'instagram' | 'twitter') {
    this.membershipService.loginWithSocial(socialProvider);
  }

  submit() {
    this.router.navigate(['/dashboard']);
  }
}
