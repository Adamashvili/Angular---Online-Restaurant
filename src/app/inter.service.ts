import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class InterService implements HttpInterceptor{

  constructor(public tools: ToolsService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.tools.startLoading()
    return next.handle(req).pipe(
     finalize(() => {
      this.tools.stopLoading()

     })
    )
  }
}
