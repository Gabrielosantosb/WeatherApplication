import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {WeatherInterface} from "../../../../models/interfaces/weather.interface";
import {faDroplet, faTemperatureHigh, faTemperatureLow, faWind} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherChartComponent implements OnChanges   {

  // Entrada de dados
  @Input() weatherDataInput!: WeatherInterface;
  Temperature!: number;
  MinTemperature !: number;
  MaxTemperature !: number;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['weatherDataInput'] && changes['weatherDataInput'].currentValue) {
      this.updateWeatherData(changes['weatherDataInput'].currentValue);
    }
  }

  updateWeatherData(newData: WeatherInterface): void {
    this.Temperature = Number(newData?.main.temp.toFixed(0).toString().substring(0, 2));
    this.MinTemperature = Number(newData?.main.temp_min.toFixed(0).toString().substring(0, 2));
    this.MaxTemperature = Number(newData?.main.temp_max.toFixed(0).toString().substring(0, 2));
  }
}
