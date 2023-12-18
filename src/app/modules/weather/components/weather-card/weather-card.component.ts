import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherInterface } from '../../../../models/interfaces/weather.interface';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherChartComponent implements OnChanges {

  // Entrada de dados
  @Input() weatherDataInput!: WeatherInterface;
  Temperature!: number;
  MinTemperature!: number;
  MaxTemperature!: number;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['weatherDataInput'] && changes['weatherDataInput'].currentValue) {
      this.updateWeatherData(changes['weatherDataInput'].currentValue);
      console.log(this.Temperature)
    }
  }

  updateWeatherData(newData: WeatherInterface): void {
    this.Temperature = Number(this.convertKelvinToCelsius(newData?.main.temp).toString().substring(0, 2));
    this.MinTemperature = Number(this.convertKelvinToCelsius(newData?.main.temp_min).toString().substring(0, 2));
    this.MaxTemperature = Number(this.convertKelvinToCelsius(newData?.main.temp_max).toString().substring(0, 2));
  }

  private convertKelvinToCelsius(kelvin: number | undefined): number {
    if (kelvin === undefined) {
      return 0;
    }
    return kelvin - 273.15;
  }
}
