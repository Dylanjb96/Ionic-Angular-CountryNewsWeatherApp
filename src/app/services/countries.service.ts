import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private baseUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  // Fetch countries by name
  getCountriesName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${name}`).pipe(
      catchError((error) => {
        console.error('Error fetching country:', error);
        return of([]); // Return an empty array to prevent breaking the UI
      })
    );
  }
  
  // Fetch all of the countries
  getAllOfCountries(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`).pipe(
      catchError((error) => {
        console.error('Error fetching all countries:', error);
        return of([]); // Return an empty array to prevent breaking the UI
      })
    );
  }
}  
