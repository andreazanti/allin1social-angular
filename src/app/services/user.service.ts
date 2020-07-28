import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  //TODO: transform the observer to promise
  // Save the cuurent user somewere
  async isLoggedIn(): Promise<boolean> {
    try {
      const response: any = await this.http.get('/user/me').toPromise();
      return response.error ? false : true;
    } catch (e) {
      return false;
    }
  }
}
