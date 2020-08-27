import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  menu: string = 'dropdown-content-Close';
  year: Array<number> = [];
  selectedYear: string;
  //
  data: Array<any> = [];
  results: Array<any> = [];
  displayedRound: string;
  displayfirst: string = 'board-none';
  display: string = 'board-none';
  

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
      '/results.json?limit=400&offset=0';
    this.http.get<any>(urlYear).subscribe((data) => {
      let res = data.MRData.RaceTable.Races;
      this.data = res;
      this.changeOpen();
      this.displayfirst = "board-none";
      this.display = 'board-none';
      setTimeout(() => this.displayfirst = 'board', 10)
    });
  }
  getDate(y) {
    this.results = y.Results;
    this.displayedRound = y.round;
    this.display = 'board';
    setTimeout(function () {
      document.getElementById('1').scrollIntoView();
    }, 50);
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
