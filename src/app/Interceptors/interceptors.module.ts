import { TokenInterceptor } from './token.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TokenInterceptor,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor,  multi: true, }
  ]
})
export class InterceptorsModule { }
