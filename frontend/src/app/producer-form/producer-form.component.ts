import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producer-form',
  templateUrl: './producer-form.component.html',
  styleUrls: ['./producer-form.component.css']
})

export class ProducerFormComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute) { }

  errormsg: string = '';
  successmsg: string = '';
  getID: any;

  ngOnInit(): void {
    this.getID = this.router.snapshot.paramMap.get('id');
    if (this.getID) {
      this.service.getSingleProducer(this.getID).subscribe((res) => {
        this.producerForm.patchValue({
          producerName: res[0].ProducerName,
          companyName: res[0].CompanyName,
          producerMobileNumber: res[0].ContactNo,
          address: res[0].Address
        })
      })
    }
  }

  producerForm = new FormGroup({
    'producerName': new FormControl('', Validators.required),
    'companyName': new FormControl('', Validators.required),
    'producerMobileNumber': new FormControl('', Validators.required),
    'address': new FormControl('', Validators.required)
  })

  addForm() {
    if (this.producerForm.valid) {
      const formData = this.producerForm.value;
      this.service.insertProducer(formData).subscribe((res) => {
        this.producerForm.reset();
        this.successmsg = res.message;
      })
    }
    else {
      this.errormsg = "All fields are required!";
    }
  }

  editForm() {
    if (this.producerForm.valid) {
      const formData = this.producerForm.value;
      this.service.updateProducer(formData, this.getID).subscribe((res) => {
        this.producerForm.reset();
        this.successmsg = res.message;
      })
    }
    else {
      this.errormsg = "All fields are required!";
    }
  }
}