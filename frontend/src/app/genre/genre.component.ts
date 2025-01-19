import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})

export class GenreComponent implements OnInit {

  datas: any;
  successmsg: any;
  id: any;

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
    this.getAllGenres();
  }

  getAllGenres() {
    this.service.getAllGenres().subscribe((res) => {
      this.datas = res;
    })
  }

  delete(id: any) {
    this.service.deleteGenre(id).subscribe((res) => {
      this.successmsg = res.message;
      this.getAllGenres();
    },
    );
  }
}
