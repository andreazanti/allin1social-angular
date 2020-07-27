import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

//Singleton
@Injectable({
  providedIn: 'root',
})
export class MembershipService {
  private BASE_URL = 'http://localhost:3000/apis';
  constructor(private http: HttpClient) {}
  loginWithSocial(socialProvider: 'facebook' | 'instagram' | 'twitter') {
    // The call to auth providers cannot be done with an ajax request because i think it contatins a redirect
    // this.http
    //   .get(this.BASE_URL + '/' + socialProvider + '/auth')
    //   .subscribe((response) => {
    //     console.log('this is the response', response);
    //   });
    // TODO: search this on web
    // The request is not done with ajax
    window.location.href = this.BASE_URL + '/' + socialProvider + '/auth';
  }
  login(username: string, password: string) {
    this.http
      .post('/auth', { username, password })
      .subscribe((response: HttpResponse<any>) => {});
  }
  register(username: string, password: string) {
    this.http
      .post('/register', { username, password })
      .subscribe((response) => response);
  }
}
