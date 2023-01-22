import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { IScoreData } from '../models/score-data';
import * as getCountryISO2 from 'country-iso-3-to-2';
import { ICountryStats } from '../models/country-stats';

@Injectable({
  providedIn: 'root',
})
export class GlobeDataService {
  dataSubstitutions = [
    [
      'ADM0_A3',
      'ADM0_A3_UN',
      'ADM0_A3_US',
      'ADM0_A3_WB',
      'GU_A3',
      'ISO_A3',
      'ISO_A3_EH',
      'ISO_N3',
      'UN_A3',
      'SOV_A3',
      'SU_A3',
    ],
    ['ISO_A2', 'WB_A2', 'FIPS_10_'],
  ];

  countryData$ = this.countryData();
  countryStats$ = this.countryStats().pipe(
    switchMap((data: ICountryStats) => {
      // Fix for missing data
      // Substitute missing country codes from other sources, such as using UN Country Codes if ISO is missing

      for (let country of data.features) {
        for (let ds of this.dataSubstitutions) {
          const subs = [];

          for (let s of ds) {
            const v = country.properties[s];

            if (parseInt(v) != -99 && !!v) subs.push(v);
          }

          if (subs.length == 0) {
            console.error('No Substitutions for', ds, country.properties);
          }

          const sub = subs[0];

          for (let s of ds) {
            const v = country.properties[s];

            if (parseInt(v) != -99 && !!v) continue;

            country.properties[s] = sub;
          }
        }

        // After substituting:
        // If 3 char country code is available and 2 char code is still missing, use conversion library.

        if (
          parseInt((country.properties.ISO_A2 || -99).toString()) == -99 ||
          !country.properties.ISO_A2
        ) {
          country.properties.ISO_A2 = getCountryISO2(country.properties.ISO_A3);
        }
      }

      return new Observable<ICountryStats>(o => o.next(data));
    })
  );

  constructor(private readonly http: HttpClient) {

  }

  countryData(): Observable<IScoreData> {
    return this.http.get<IScoreData>('./assets/data.json');
  }

  countryStats(): Observable<ICountryStats> {
    return this.http.get<ICountryStats>('./assets/ne_110m_admin_0_countries.json');
  }
}
