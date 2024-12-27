import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToggle,
  IonToolbar
} from '@ionic/angular/standalone';
import { SettingsService } from '../services/settings.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonList,
    IonListHeader,
    IonLabel,
    IonRadio,
    IonRadioGroup,
    IonItem,
    IonToggle
  ],
})
export class SettingsPage implements OnInit {
  selectSetting: string = 'metric';
  isDarkMode: boolean = false;

  constructor(private settingsService: SettingsService, private router: Router) {}

  async ngOnInit() {
    this.loadSetting();
    const theme = document.body.getAttribute('theme');
    this.isDarkMode = theme === 'dark';
  }

  private async loadSetting() {
    this.selectSetting = (await this.settingsService.getUnits()) || 'metric';
    console.log('Loaded setting:', this.selectSetting);
  }
  
  public async saveSetting() {
    console.log('Saving setting:', this.selectSetting);
    await this.settingsService.setUnits(this.selectSetting);
    alert('Setting saved!');
    this.router.navigate(['/home']); //Navigate back to home page after saving
  }

  toggleDarkMode(event: any) {
    const isDark = event.detail.checked; //Use the event value directly
    this.isDarkMode = isDark;
    document.body.setAttribute('theme', isDark ? 'dark' : 'light');
  }
  
  

  goBack() {
    this.router.navigate(['/']); // Navigate to the Home Page
  }
}
