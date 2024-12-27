import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5';
  private apiKey = 'b63f3466f146b59177372350788f83ef';

  constructor(private http: HttpClient) {}

  getWeatherDataByCoordinates(lat: number, lon: number, units: string = 'metric'): Observable<any> {
    const url = `${this.baseUrl}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${this.apiKey}`;
    console.log('Weather API URL:', url); // Log the constructed URL
    return this.http.get(url);
  }
  
}
