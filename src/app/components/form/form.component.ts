import { FormService } from './form.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [FormService],
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input()
  form: FormGroup;

  @Input()
  url: string;

  @Input()
  model: any;

  @Input()
  fields: FormlyFieldConfig;

  @Input()
  submit: Function;

  constructor(
    private formService: FormService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.status === 'VALID') {
      const payload = {};
      Object.keys(this.form.controls).forEach((key, index) => {
        payload[key] = this.form.controls[key].value;
      });
      this.formService.submit(
        payload,
        this.url,
        this.onError.bind(this),
        this.onSuccess.bind(this)
      );
    }
  }

  onError(error) {
    console.log('handle error of form here ', error);
    if (error && error.type === 'ValidationError') {
      error.details.forEach((errorDetail) => {
        const message = Object.values(errorDetail.constraints).join('\n');
        this.form.get(errorDetail.property).setErrors({
          serverError: {
            message,
          },
        });
      });
    }
    //  else {
    //   let message = '';
    //   if (error.details) {
    //     message = error.details.message;
    //   } else message = 'UNKNOWN_ERROR';

    //   this.messageService.open(message);
    // }
  }

  onSuccess(response) {
    this.submit(response);
  }
}
