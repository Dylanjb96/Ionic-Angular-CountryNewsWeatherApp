import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  isDarkMode = false;

  constructor() {
    this.initializeTheme();
  }

  initializeTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkMode = prefersDark.matches;
    this.applyTheme(this.isDarkMode);

    // Listen for system theme changes
    prefersDark.addEventListener('change', (event) => {
      this.applyTheme(event.matches);
    });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme(this.isDarkMode);
  }

  applyTheme(isDark: boolean) {
    document.body.setAttribute('theme', isDark ? 'dark' : 'light');
  }
}
