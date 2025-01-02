# Country, News & Weather App

The Country, News & Weather App is an Ionic-Angular application that allows users to:
- Search for information about countries.
- View news articles related to a selected country.
- Check the current weather of a selected country.

## Features

1. **Country Search**
   - Search for a country by name and view details including the flag and region.

2. **News Integration**
   - Fetch and display news articles for the selected country using the NewsData API.

3. **Weather Integration**
   - Display current weather information for the selected country using the OpenWeatherMap API.

4. **Recent Searches**
   - Store and display recent country searches for quick access.

5. **Dark Mode**
   - Toggle between Light and Dark themes for improved usability and aesthetics.

6. **Share Feature**
   - Share news articles or weather details directly via supported platforms using the Ionic Capacitor Share plugin.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Ionic CLI](https://ionicframework.com/docs/cli/installation)
- An API key for:
  - [Country API](https://restcountries.com/#endpoints-name)
  - [NewsData API](https://newsdata.io/)
  - [OpenWeatherMap API](https://openweathermap.org/)

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/country-news-weather-app.git
   cd country-news-weather-app

2. Install dependencies:
 ```bash
   npm install
```
3. Add your API keys (optional):
- Open src/app/services/news.service.ts and replace YOUR_API_KEY with your NewsData API key.
- Open src/app/services/weather.service.ts and replace YOUR_API_KEY with your OpenWeatherMap API key.

4. Run the App:
 ```bash
   ionic serve
   ```

## Usage
- Enter a country name on the home page and press the "Search Country" button.
- Navigate to the news or weather pages for the selected country.
- Use the setting page to toggle between Metric, Standard, and Imperial units for weather data.
- Switch between Light and Dark themes using Dark Mode toggle in the settings.

## Project Structure
/G00438786
│
├── /src
│   ├── /app
│   │   ├── /countries
│   │   │   ├── countries.page.html
│   │   │   ├── countries.page.scss
│   │   │   ├── countries.page.ts
│   │   │   └── countries.module.ts
│   │   ├── /home
│   │   │   ├── home.page.html
│   │   │   ├── home.page.scss
│   │   │   ├── home.page.ts
│   │   │   └── home.module.ts
│   │   ├── /news
│   │   │   ├── news.page.html
│   │   │   ├── news.page.scss
│   │   │   ├── news.page.ts
│   │   │   └── news.module.ts
│   │   ├── /settings
│   │   │   ├── settings.page.html
│   │   │   ├── settings.page.scss
│   │   │   ├── settings.page.ts
│   │   │   └── settings.module.ts
│   │   ├── /weather
│   │   │   ├── weather.page.html
│   │   │   ├── weather.page.scss
│   │   │   ├── weather.page.ts
│   │   │   └── weather.module.ts
│   │   └── app.component.ts
│   │
│   ├── /assets
│   │   └── (Static assets like images, icons, etc.)
│   │
│   └── index.html
│
├── .gitignore
├── README.md (Contains project description and instructions)
├── GitLink.pdf (Contains the GitHub repository link)
├── innovation.pdf (Description of the innovations or extra features added)
├── angular.json (Angular CLI configuration)
├── ionic.config.json (Ionic project configuration)
├── package.json (Node.js dependencies and scripts)
└── tsconfig.json (TypeScript configuration)


## Contribution
Contribution are welcome! Feel free to fork this repository and submit a pull request. 
