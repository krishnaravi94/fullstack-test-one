import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }


  getCountries(){
    // const url = 'https://api.first.org/data/v1/countries';
    const url = 'https://restcountries.com/v3.1/all';
    return this.http.get(url).toPromise();
  }
}
