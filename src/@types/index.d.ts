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
//TODO: extend the Http response of angular
// declare module '@angular/common/http' {
//   export interface HttpResponse {}
// }
