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
  setError = ""
  searchIcon = faMagnifyingGlass

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getWeatherData(this.initialCity)
  }

  getWeatherData(city: string): void {
    this.weatherService.getWeatherData(city).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (response) => {
        this.weatherData = response;
        this.setError = "";
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
        this.setError = 'Erro ao obter dados de clima.';
      }
    });
  }

  onSubmit(): void {
    this.isError()
    if (this.initialCity.trim() !== "") {
      this.getWeatherData(this.initialCity);
      this.initialCity = '';
    }
  }

  isError(): void {
    if (this.initialCity.trim() == "") {
      this.setError = "Insira uma cidade no campo"
    } else {

      this.setError = "";
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

