import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  Component,
  OnInit,
  HostListener,
  ɵɵpureFunction1,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  data: Array<any> = [];
  contactForm: FormGroup;
  mail: Array<any> = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.contactForm = new FormGroup({
      subject: new FormControl(),
      message: new FormControl(),
      driversname: new FormControl(),
    });
    this.getDrivers();
  }
  getDrivers() {
    let url = 'http://ergast.com/api/f1/2020/drivers.json';
    this.http.get<any>(url).subscribe((data) => {
      this.data = data.MRData.DriverTable.Drivers;
    });
  }
  onSubmit() {
    var tmp = document.getElementsByClassName('Form-Container');
    (tmp[0] as any).reset();
    this.mail = this.contactForm.value;
  }
}
