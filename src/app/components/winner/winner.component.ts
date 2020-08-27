import {
  Component,
  OnInit,
  HostListener,
  ɵɵpureFunction1,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css'],
})
export class WinnerComponent implements OnInit {
  menu: string = 'dropdown-content-Close';
  year: Array<number> = [];
  selectedYear: string;
  data: Array<any> = [];
  results: Array<any> = [];
  displayfirst: string = 'board-none';

  constructor(private http: HttpClient) {}
  fillallyears() {
    for (let i = 1950; i <= 2020; i++) {
      this.year.push(i);
    }
    this.year.reverse();
  }
  getYear(y) {
    this.selectedYear = y;

    let urlYear =
      'http://ergast.com/api/f1/' +
      this.selectedYear +
      '/driverStandings.json?limit=400&offset=0';
    this.http.get<any>(urlYear).subscribe((data) => {
      let res = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      this.data = res;
      this.changeOpen();
      this.displayfirst = "board-none";
      setTimeout(() => this.displayfirst = 'board', 10)
    });
  }
  ngOnInit(): void {
    this.fillallyears();
  }
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (event.target.className !== 'dropbtn') {
      if (this.menu === 'dropdown-content-Open') {
        if (
          event.target.className !== 'Year' &&
          event.target.className !== 'dropdown-content-Open'
        ) {
          this.menu = 'dropdown-content-Close';
        }
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
