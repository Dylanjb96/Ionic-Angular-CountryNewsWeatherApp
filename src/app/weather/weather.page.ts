import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { SettingsService } from '../services/settings.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [
    CommonModule, // For directives like *ngIf
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonSpinner,
  ],
})
export class WeatherPage implements OnInit {
  lat!: number;
  lon!: number;
  cityName!: string;
  units: string = 'metric';
  weatherData: any;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private settingsService: SettingsService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.units = (await this.settingsService.getUnits()) || 'metric';

    this.route.queryParams.subscribe((params) => {
      if (params['lat'] && params['lon'] && params['city']) {
        this.lat = +params['lat'];
        this.lon = +params['lon'];
        this.cityName = params['city'];
        this.fetchWeatherData();
      } else {
        alert('Missing location details!');
        this.goBack();
      }
    });
  }

  fetchWeatherData() {
    this.weatherService.getWeatherDataByCoordinates(this.lat, this.lon, this.units).subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again later.');
        this.goBack();
      }
    );
  }

  goBack() {
    this.router.navigate(['/countries']);
  }

  getIconUrl(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }
}
