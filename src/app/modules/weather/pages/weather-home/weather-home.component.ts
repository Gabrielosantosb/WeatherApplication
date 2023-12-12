import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../../services/weather.service";

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit{
  initialCity = "London"
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getWeatherData(this.initialCity)
  }

  getWeatherData(city: string): void {
    this.weatherService.getWeatherData(city).subscribe({
        next: (response) => {
          console.log(response)
        }
      },
    )
  }
}

