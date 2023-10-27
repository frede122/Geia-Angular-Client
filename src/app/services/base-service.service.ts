import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<t> {
  
  public url = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private route : string
  ) { }

  public create(parament: t): Observable<t>{
    return this.http.post<t>(`${this.url}/${this.route}`, parament);
  }

  public getById(id: number): Observable<t>{
    return this.http.get<t>(`${this.url}/${this.route}/${id}`);
  }

  public getAll(): Observable<t[]>{
    return this.http.get<t[]>(`${this.url}/${this.route}`);
  }

  public update(id:number, parament: t): Observable<t>{
    return this.http.put<t>(`${this.url}/${this.route}/${id}`, parament);
  }

  public delete(id:number): Observable<t>{
    return this.http.delete<t>(`${this.url}/${this.route}/${id}`);
  }


}
