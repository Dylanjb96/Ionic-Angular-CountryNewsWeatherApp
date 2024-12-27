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
  ],
})
export class SettingsPage implements OnInit {
  selectSetting: string = 'metric';
  constructor(private settingsService: SettingsService, private router: Router) {}

  async ngOnInit() {
    this.loadSetting();
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
  

  goBack() {
    this.router.navigate(['/']); // Navigate to the Home Page
  }
}
