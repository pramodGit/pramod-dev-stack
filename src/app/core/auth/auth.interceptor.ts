import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify the request (e.g., add a header)
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer my-token')
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedReq);
  }
}