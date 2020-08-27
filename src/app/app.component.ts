import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  banner: string = 'background';
  route: string;
  constructor(private router: Router, location: Location) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
      } else {
        this.route = 'Home';
      }
      if (this.route === 'Home') {
        this.banner = 'background';
      } else {
        this.banner = 'background-none';
      }
    });
  }
  ngOnInit() {}
}
