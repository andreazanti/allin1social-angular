import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError, never } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { MessageService } from '../../components/message/message.service';
import { LoaderService } from '../../components/loader/loader.service';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  private BASE_URL = 'http://localhost:3000/apis';
  constructor(
    private loader: LoaderService,
    private messageService: MessageService
  ) {}
  // Called every time a request is made
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Show the loader at every request made until request is handled
    this.loader.show();
    const reqClone = req.clone({
      url: `${this.BASE_URL}${req.url}`,
      withCredentials: true,
    });
    // We call finalize only to transform the simple functon into an observable
    // So we can do observable1.pipe(observable2)

    return next
      .handle(reqClone)
      .pipe(finalize(() => this.loader.hide()))
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // let errorMsg = '';
          // if (error.error instanceof ErrorEvent) {
          //   console.log('this is client side error');
          //   errorMsg = `Error: ${error.error.message}`;
          // } else {

          // Handle here only generic error
          if (error.error.type == 'GenericError') {
            console.log('is generic error');
            let message = '';
            if (error.error.details) {
              message = error.error.details.message;
            } else message = 'UNKNOWN_ERROR';

            this.messageService.open(message);
          }

          return throwError(error);
        })
      );
  }
}
