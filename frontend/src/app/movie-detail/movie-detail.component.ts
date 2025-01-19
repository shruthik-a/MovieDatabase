import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: any = {};
  getID: any;

  constructor(private router: ActivatedRoute, private service: ApiserviceService) { }

  ngOnInit(): void {
    this.getID = this.router.snapshot.paramMap.get('id');
    this.service.getMovieDetails(this.getID).subscribe(response => {
      this.movie = response;
    });
  }
}
