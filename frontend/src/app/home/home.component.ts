import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  movies: any[] = [];
  searchQuery: string = '';

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
    this.service.getMovies().subscribe((response) => {
      this.movies = response;
    });
  }

  searchMovies(): any[] {
    return this.movies.filter((movie) =>
      movie.MovieName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      movie.GenreName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
