import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherChartComponent implements OnInit{
  // Entrada de dados
  @Input() weatherData!: string;

  ngOnInit(): void {
    console.log("Dados: ", this.weatherData)
  }

}
