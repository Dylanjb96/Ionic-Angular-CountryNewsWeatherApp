import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, 
    FormsModule,  
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonButton, 
    IonIcon, 
    IonButtons, 
    IonItem, 
    IonLabel, 
    IonInput],
})
export class HomePage {
  constructor(private router: Router) {}

  countryName: string = ''; //Holds the entered country name

  //Navigate to the Settings page
  navigateToSetting() {
    console.log('Navigating to Settings Page'); // Debugging
    this.router.navigate(['/settings']);
  }
  
  //Navigate to the Countries Page eith the entered country name
  getCountries() {
    if (this.countryName.trim() && /^[a-zA-Z\s]+$/.test(this.countryName)) {
      console.log('Navigating to countries page with:', this.countryName);
      this.router.navigate(['/countries'], { queryParams: { name: this.countryName } });
    } else {
      alert('Please enter a valid country name');
    }
  }
}  
