import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private storage: Storage) {
    this.init();
  }

  private async init() {
    await this.storage.create();
  }

  async getUnits(): Promise<string | null> {
    return await this.storage.get('units');
  }

  async setUnits(units: string): Promise<void> {
    await this.storage.set('units', units);
  }
}
