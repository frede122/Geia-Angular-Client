import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseReadService } from '../base-read.service';
import { Observable } from 'rxjs/internal/Observable';

const ROUTE = "address/state";
@Injectable({
  providedIn: 'root'
})

export class StateService extends BaseReadService<any> {

  constructor(private httpClient: HttpClient) { 
    super(httpClient, ROUTE);
  }

  
}
