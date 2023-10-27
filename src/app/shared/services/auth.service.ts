import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { EventEmitter, Injectable } from '@angular/core';
import { UserDetailsModel } from 'src/app/models/person/user/user-details.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuth: boolean = false;
  showMenu = new EventEmitter<boolean>();
  public url: string = environment.apiUrl;
  public route: string = '/logout'
  constructor(public http: HttpClient, private router: Router) { }

  getUser() {
    return JSON.stringify(localStorage.getItem("user"));
  }

  getMe() {
    return this.http.get<any>(`${environment.apiUrl}/auth/me`)
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLogged() {
    if (this.getToken() && this.getUser()) {
      return true;
    } else {
      return false;
    }
  }

  login(credentials: { email: string, password: string }) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, credentials).subscribe(data => {
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));
      this.userAuth = true;
      this.router.navigate(['/main']);
    });
  }
  update(user: UserDetailsModel) {
    return this.http.put<any>(`${environment.apiUrl}/auth/update`, user);
  }
  newPassword(user: { email: string, password: string, newpassword: string }) {
    return this.http.post<any>(`${environment.apiUrl}/new-password`, user);
  }

  logout() {
    this.http.post(`${this.url}/${this.route}`, null).subscribe();
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    this.userAuth = false;
    this.router.navigate(['/login']);
  }
}
