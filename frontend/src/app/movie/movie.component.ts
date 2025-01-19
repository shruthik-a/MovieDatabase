import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  datas: any;
  successmsg: any;
  id: any;

  constructor(private service: ApiserviceService) { }
  ngOnInit(): void {
    this.getAllMovies();
  }
  getAllMovies() {
    this.service.getAllMovies().subscribe((res) => {
      this.datas = res;
    })
  }
  delete(id: any) {
    this.service.deleteMovie(id).subscribe((res) => {
      this.successmsg = res.message;
      this.getAllMovies();
    })
  }
}
