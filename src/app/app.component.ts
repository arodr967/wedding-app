import { Component, OnInit } from '@angular/core';
import { HomeService } from './home/services/home.service';

@Component({
  selector: 'app-root',
  template:  `
    <h1>
      {{title}}
    </h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getGuests()
      .subscribe(data => {
        console.log('data', data);
      });
  }
}
