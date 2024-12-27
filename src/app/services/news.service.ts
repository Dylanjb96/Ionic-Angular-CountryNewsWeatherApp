import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'https://newsdata.io/api/1';
  private apiKey = 'pub_628415dd75653fe09f7aa71e948326f953224';

  constructor(private http: HttpClient) {}
   
  //Fetch news data from country code
  getNewsDataByCountry(countryCode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/news?apikey=${this.apiKey}&country=${countryCode}`);
  }
}
