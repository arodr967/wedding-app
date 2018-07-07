import { Component } from '@angular/core';
import { HomeService } from './home/services/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template:  `
    <h1>Wedding App</h1>
    <ul>
      <h3>Guests:</h3>
      <li *ngFor="let guest of (guests | async)">{{ guest.firstName }} {{ guest.lastName }}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  guests: Observable<any>;

  constructor(private homeService: HomeService) {
    this.guests = this.homeService.getGuests();
  }
}
