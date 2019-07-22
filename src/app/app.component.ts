import { Component } from '@angular/core';
import { ApiService } from './apiservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private apiservice : ApiService){}

  grid1: string;
  grid2: string;

  report : string;
//creates observable that listens for changes in the weather for grid 1 and 2
forecast(grid1:string, grid2:string){
 this.apiservice.getWeather(this.grid1, this.grid2).subscribe((res:any) => {
   console.log(res);
   this.report = res.properties;
   console.log(this.report);

  });
}

  title = 'httpexercise';

}
