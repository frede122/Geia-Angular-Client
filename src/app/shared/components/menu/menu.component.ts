import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  showFiller: boolean = false;

  constructor(private router: Router){}
  logout(){
    this.router.navigate(['login']);
  }
}
