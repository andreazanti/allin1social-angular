import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormService {
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
