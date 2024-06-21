import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  public cartItemNumber: Subject<any> = new Subject()
}
