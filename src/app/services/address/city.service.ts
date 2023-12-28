import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseReadService } from '../base-read.service';
import { Observable } from 'rxjs';

const ROUTE = "address/city";
const ROUTESTATE = "state";
@Injectable({
  providedIn: 'root'
})

export class CityService extends BaseReadService<any> {

  constructor(private httpClient: HttpClient) { 
    super(httpClient, ROUTE);
  }

  public getByStateId(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/${ROUTE}/${ROUTESTATE}/${id}`);
  }
}
