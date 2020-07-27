//TODO: declare the correct field for the interface
export interface FormComponentInterface {
  form: import('@angular/forms').FormGroup;
  model: any;
  url: string;
  fields: import('@ngx-formly/core').FormlyFieldConfig[];
  submit();
}

export interface SubmitData {
  url: string;
  handler: Function;
}
