import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = "c416132dc3dbe74994edd6525b5156aa";
  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<any>{
    return this.http
      // .get(`api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${this.apiKey}`,
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${this.apiKey}`,
      {})

  }
}
