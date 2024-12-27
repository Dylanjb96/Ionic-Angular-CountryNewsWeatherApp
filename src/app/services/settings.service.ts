import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private storageKey = 'selectedUnit';
  constructor(private storage: Storage) {
    this.init();
  }

  private async init() {
    await this.storage.create();
  }

  //Get the saved unit
  async getUnits(): Promise<string | null> {
    return await this.storage.get(this.storageKey);
  }

  //Save the selected unit
  async setUnits(units: string): Promise<void> {
    await this.storage.set(this.storageKey, units);
  }
}
