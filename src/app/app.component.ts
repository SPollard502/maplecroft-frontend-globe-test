import { GlobeDataService } from './apis/globe-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  countryDetails?: string;
  title = 'globe-demo';

  constructor(
    private GlobeData: GlobeDataService
  ) {}
}
