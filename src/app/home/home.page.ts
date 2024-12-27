import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel,
  IonList,
  IonListHeader,
  IonTitle, IonToolbar,
} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

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
    IonList,
    IonListHeader, 
    IonInput],
})
export class HomePage {
  constructor(private router: Router, private storage: Storage) {}

  countryName: string = ''; //Holds the entered country name
  recentSearches: string[] = []; 

  //Navigate to the Settings page
  navigateToSetting() {
    console.log('Navigating to Settings Page'); // Debugging
    this.router.navigate(['/settings']);
  }
  
  //Navigate to the Countries Page eith the entered country name
 async getCountries() {
    if (this.countryName.trim() && /^[a-zA-Z\s]+$/.test(this.countryName)) {
      console.log('Navigating to countries page with:', this.countryName);
      //Save the search and navigate
      await this.saveToRecentSearch(this.countryName);
      this.router.navigate(['/countries'], { queryParams: { name: this.countryName } });
    } else {
      alert('Please enter a valid country name');
    }
  }

  async ngOnInit() {
    //Start Ionic storage and load recent searches
    await this.storage.create();
    this.loadRecentSearch();
  }

  async loadRecentSearch() {
    //Load recent search from storage
    this.recentSearches = (await this.storage.get('recentSearches')) || [];
  }

  async saveToRecentSearch(country: string) {
    //Add a country to recent searches if not already present
    if (!this.recentSearches.includes(country)) {
      this.recentSearches.unshift(country); // Add to the start of the array
      this.recentSearches = this.recentSearches.slice(0, 5); // Limit to 5 items
      await this.storage.set('recentSearches', this.recentSearches); // Save to storage
    }
  }

  async selectRecentSearch(country: string) {
    this.countryName = country;
    await this.getCountries();
  }
}  
