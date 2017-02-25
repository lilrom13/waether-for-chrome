import {City} from "./city";

export class Weather {
  city: any = {};
  id: number;
  main: string;
  description: string;
  icon: string;

  fromJSON(json) {
    console.log(json.name);
    this.city = new City(json.name, json.id, json.dt)
    this.id = json.weather[0].id;
    this.main = json.weather[0].main;
    this.description = json.weather[0].description;
    this.icon = json.weather[0].icon;
  }
}
