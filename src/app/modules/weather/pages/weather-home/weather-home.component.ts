import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from "../../../services/weather.service";
import {WeatherInterface} from "../../../../models/interfaces/weather.interface";
import {Subject, takeUntil} from "rxjs";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject()
  initialCity = "Brasilia"
  weatherData !: WeatherInterface
  searchIcon = faMagnifyingGlass

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.initialCity)
  }

  getWeatherData(city: string): void {
    this.weatherService.getWeatherData(city).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
        next: (response) => {
          response && (this.weatherData == response);
          console.log(response)
        }
      },
    )
  }

  onSubmit(): void{
    this.getWeatherData(this.initialCity);
    this.initialCity = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

