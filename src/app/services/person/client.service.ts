import { HttpClient } from '@angular/common/http';
import { BaseService } from './../base-service.service';
import { Injectable } from '@angular/core';


const ROUTE = "";
@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseService<any>{
  constructor(private httpClient: HttpClient) { 
    super(httpClient, ROUTE);
  }
}
