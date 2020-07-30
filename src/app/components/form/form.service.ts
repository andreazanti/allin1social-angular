import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormService {
  //TODO:
  // 4 solutions here:
  // Some times errors don't need to be catched by interceptor but from the form

  // 1) Define two differents httpclient with their rispective interceptors ( this http client with no error handling)
  // httpclient doesn't need to be providedIn: root
  // 2) define this logic in the interceptor: if is generic error show always the modal if is instead
  // a validation error doesn't handle the error ( the form will do!!)
  // 3) extends the http client with a service and use every time that service ( too much code i think)
  // 4) pass a http param and disable if present before to handle the request ( it hink this is not good because params are created to adedd some param to request)

  // Solution 2 is choosen for now

  constructor(private http: HttpClient) {}

  submit(payload: any, url: string, onError: Function, onSuccess: Function) {
    this.http.post(url, payload).subscribe(
      (response) => {
        onSuccess(response);
      },
      (response) => {
        onError(response.error);
      }
    );
  }
}
