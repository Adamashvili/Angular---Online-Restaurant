import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  public cartItemNumber: Subject<any> = new Subject()

  public loadingSub: BehaviorSubject<boolean> = new BehaviorSubject(false)

  startLoading() {
    this.loadingSub.next(true)
  }

  stopLoading() {
    this.loadingSub.next(false)
  }
}
