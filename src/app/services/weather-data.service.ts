import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private httpClient : HttpClient) { }

  getWeatherData = (cityName : string) : Observable<WeatherData> => {
    return this.httpClient.get<WeatherData>(environment.weatherApiBaseUrl, {
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json')
      .set('appid', environment.API_KEY)
    });
  }

 }
