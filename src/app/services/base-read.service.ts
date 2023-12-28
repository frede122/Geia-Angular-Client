import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseReadService<t> {

  public url = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private route : string
  ) { }

  public getById(id: number): Observable<t>{
    return this.http.get<t>(`${this.url}/${this.route}/${id}`);
  }

  public getAll(): Observable<t>{
    return this.http.get<t>(`${this.url}/${this.route}`);
  }
  
}
