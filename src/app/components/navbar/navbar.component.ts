import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menu: string = 'dropdown-content-Close';

  constructor() {}

  ngOnInit(): void {}
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (event.target.className !== 'dropbtn') {
      if (this.menu === 'dropdown-content-Open') {
        this.menu = 'dropdown-content-Close';
      }
    }
  }
  changeOpen() {
    if (this.menu === 'dropdown-content-Close') {
      this.menu = 'dropdown-content-Open';
    } else {
      this.menu = 'dropdown-content-Close';
    }
  }
}
