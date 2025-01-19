import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  datas: any;
  successmsg: any;
  id: any;

  ngOnInit(): void {
    this.getAllDirectors()
  }

  getAllDirectors() {
    this.service.getAllDirectors().subscribe((res) => {
      this.datas = res
    })
  }

  delete(id: any) {
    this.service.deleteDirector(id).subscribe((res) => {
      this.successmsg = res.message;
      this.getAllDirectors();
    },
    );
  }
}
