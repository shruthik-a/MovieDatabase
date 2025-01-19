import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

  datas: any;
  successmsg: any;
  id: any;

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
    this.getAllProducers();
  }
  getAllProducers() {
    this.service.getAllProducers().subscribe((res) => {
      this.datas = res;
    })
  }
  delete(id: any) {
    this.service.deleteProducer(id).subscribe((res) => {
      this.successmsg = res.message;
      this.getAllProducers();
    })
  }
}
