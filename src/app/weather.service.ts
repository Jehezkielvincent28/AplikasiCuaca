import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey: string = '83e9e986e8ac8313ea14a21e00a54bd1';
  apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  // Mengambil cuaca berdasarkan nama kota
  getWeatherByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }

  // Mengambil cuaca berdasarkan koordinat
  getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}