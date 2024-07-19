import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


          let token = null;
          if (typeof localStorage !== 'undefined') {
            token = localStorage.getItem('jwt');
          }

          
          if (token) {
            const cloned = req.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`
              }
            });

            return next.handle(cloned);
    }
       return next.handle(req);
}}