import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../_services/weather.service";
import {Weather} from "../_models/weather";
import {AlertService} from "../_services/alert.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent implements OnInit {
  weather = new Weather();
  loading = true;

  constructor(private weatherService: WeatherService, private  alertService: AlertService) { }

  ngOnInit() {
    var options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
      popup: this
    };

    function success(pos) {
      var crd = pos.coords;
      getWeatherByCoor(crd);
    };

    function error(err) {
      options.popup.alertService.error('Error : '+err.message);
      options.popup.loading = false;
    };

    function getWeatherByCoor(crd: {}) {
      options.popup.weatherService.getWeatherByCoordinate(crd)
        .subscribe(
          response => {
            options.popup.weather.fromJSON(response);
            options.popup.loading = false;

          },
          error => {
            options.popup.alertService.error('Error : '+error);
            options.popup.loading = false;
          });
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }
}
