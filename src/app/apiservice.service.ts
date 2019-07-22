import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ApiService {

  constructor(private http: HttpClient){}
// function that returns third party data
  getWeather(grid1,grid2){

  return this.http.get(`https://api.weather.gov/gridpoints/TOP/${grid1},${grid2}/forecast`)

  }
}
