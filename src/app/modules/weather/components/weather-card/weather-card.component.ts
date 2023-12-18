import {Component, Input, OnInit} from '@angular/core';
import {WeatherInterface} from "../../../../models/interfaces/weather.interface";
import {faDroplet, faTemperatureHigh, faTemperatureLow, faWind} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherChartComponent implements OnInit{
  // Entrada de dados
  @Input() weatherDataInput!: WeatherInterface;
  Temperature!: number;
  MinTemperature !: number;
  MaxTemperature !: number;

  minTemperatureIcon = faTemperatureLow;
  maxTemperaturaIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

  ngOnInit(): void {
    this.Temperature = Number(this.weatherDataInput?.main.temp.toFixed(0).toString().substring(0, 2));
    this.MinTemperature = Number(this.weatherDataInput?.main.temp_min.toFixed(0).toString().substring(0, 2));
    this.MaxTemperature = Number(this.weatherDataInput?.main.temp_max.toFixed(0).toString().substring(0, 2));
  }
}

