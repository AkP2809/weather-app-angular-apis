import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather-model';
import { WeatherDataService } from './services/weather-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'weather-app';
  weatherData ?: WeatherData;
  cityName : string = 'Jamnagar';

  constructor(private weatherService : WeatherDataService) {
  }

  ngOnInit(): void {
    this.getCityWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getCityWeatherData(this.cityName);
    this.cityName = '';
  }

  getCityWeatherData = (cityName : string) => {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (weatherData) => {
        this.weatherData = weatherData;
        console.log(weatherData);
      },
      error: (err) => console.log(err)
    });
  }
}
