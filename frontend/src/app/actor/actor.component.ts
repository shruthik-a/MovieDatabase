import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})

export class ActorComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  datas: any;
  successmsg: any;
  id: any;

  ngOnInit(): void {
    this.getAllActors();
  }

  getAllActors() {
    this.service.getAllActors().subscribe((res) => {
      this.datas = res;
    })
  }

  delete(id: any) {
    this.service.deleteActor(id).subscribe((res) => {
      this.successmsg = res.message;
      this.getAllActors();
    },
    );
  }
}