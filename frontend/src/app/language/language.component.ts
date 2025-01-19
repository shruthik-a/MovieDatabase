import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})

export class LanguageComponent implements OnInit {

  datas: any;
  successmsg: any;
  id: any;

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
    this.getAllLanguages();
  }

  getAllLanguages() {
    this.service.getAllLanguages().subscribe((res) => {
      this.datas = res;
    })
  }

  delete(id: any) {
    this.service.deleteLanguage(id).subscribe((res) => {
      this.successmsg = res.message;
      this.getAllLanguages();
    },
    );
  }
}
