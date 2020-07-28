import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError, OperatorFunction } from 'rxjs';
import { finalize } from 'rxjs/operators';
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

    return next.handle(reqClone).pipe(finalize(() => this.loader.hide()));
    // .pipe(
    //   //TODO:
    //   //Handle errors here
    //   catchError((error: HttpErrorResponse) => {
    //     let errorMsg = '';
    //     if (error.error instanceof ErrorEvent) {
    //       console.log('this is client side error');
    //       errorMsg = `Error: ${error.error.message}`;
    //     } else {
    //       console.log('this is server side error');
    //       console.log('ERROR', error);
    //       errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
    //     }
    //     //TODO: open modal hers
    //     return throwError(errorMsg);
    //   })
    // );
  }
}
