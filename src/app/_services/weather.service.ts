import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeatherByCityId(cityId: number) {
  return this.http.get(environment.apiBaseUrl+'/data/2.5/weather?id=2172797&units=metric&APPID='+environment.apiKey)
    .map(response => response.json());
  }

  getWeatherByCoordinate(coord: any) {
    return this.http.get(environment.apiBaseUrl+'/data/2.5/weather?lat='+coord.latitude+'&lon='+coord.longitude+'&APPID='+environment.apiKey)
      .map(response => response.json());
  }
}
