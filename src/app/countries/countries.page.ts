import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import here for standalone
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent, IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTitle, IonToolbar
} from '@ionic/angular/standalone';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,  
    IonItem, 
    IonLabel, 
    IonInput, 
    IonButtons,
    IonButton, 
    IonList, 
    IonAvatar, 
    HttpClientModule // Make sure HttpClientModule is included here for standalone component
  ],
})
export class CountriesPage implements OnInit {
  searchQuery: string = '';
  countries: any[] = [];
  searchPerformed: boolean = false;

  constructor(private route: ActivatedRoute, private countriesService: CountriesService, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['name']) {
        this.searchQuery = params['name'];
        console.log('Searching for country: ', this.searchQuery); 
        this.searchCountries();
      }
    });
  }

  searchCountries() {
    if (this.searchQuery.trim()) {
      this.countriesService.getCountriesName(this.searchQuery).subscribe(
        (data) => {
          console.log('API Response:', data); 
          this.countries = data;
          this.searchPerformed = true;
        },
        (error) => {
          console.error('Error fetching countries:', error);
          this.countries = [];
          this.searchPerformed = true;
        }
      );
    }
  }

  viewNews(country: any) {
    if (country && country.cca2) {
      console.log('Navigating to News page for:', country.name?.common);
      this.router.navigate(['/news'], { queryParams: { countryName: country.name.common, country: country.cca2 } });
    } else {
      console.error('Country code (cca2) is missing for:', country);
    }
  }
  
  

  viewWeather(country: any) {
    if (country && country.capital && country.latlng) {
      const capitalCity = country.capital[0]; // Assuming `capital` is an array
      const [lat, lon] = country.latlng; // Assuming `latlng` is an array
      console.log('Navigating to Weather page for:', capitalCity, lat, lon);
      this.router.navigate(['/weather'], {
        queryParams: {
          city: capitalCity,
          lat: lat,
          lon: lon
        }
      });
    } else {
      console.error('Country data is incomplete:', country);
    }
  }
  
  goBack() {
    this.router.navigate(['/']); //Redirect back to the Home Page
  }
  
}
