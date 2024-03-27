import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  public films:any | null = null;
  public searchTitle: any | null = null;
  public searchYear: any | null = null;
  public searchPlot: string = "Short";

  constructor(
    private http:HttpClient
  ) { }

  onSubmit():void{
    this.http.get(`http://www.omdbapi.com/?apikey=9bfdd98a&t=${this.searchTitle}&y=${this.searchYear}&plot=${this.searchPlot}`)
      .subscribe(respons => {
        this.films = respons;
        console.log(this.films)
        console.log(this.searchPlot)
      })
  }

}
