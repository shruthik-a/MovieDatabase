import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-director-form',
  templateUrl: './director-form.component.html',
  styleUrls: ['./director-form.component.css']
})

export class DirectorFormComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute) { }

  errormsg: string = '';
  successmsg: string = '';
  getID: any;

  ngOnInit(): void {
    this.getID = this.router.snapshot.paramMap.get('id');
    if (this.getID) {
      this.service.getSingleDirector(this.getID).subscribe((res) => {
        this.directorForm.patchValue({
          directorName: res[0].DirectorName,
          directorMobileNumber: res[0].MobileNumber,
          address: res[0].Address
        })
      })
    }
  }

  directorForm = new FormGroup({
    'directorName': new FormControl('', Validators.required),
    'directorMobileNumber': new FormControl('', Validators.required),
    'address': new FormControl('', Validators.required)
  })

  addForm() {
    if (this.directorForm.valid) {
      const formData = this.directorForm.value;
      this.service.insertDirector(formData).subscribe((res) => {
        this.directorForm.reset();
        this.successmsg = res.message;
      })
    }
    else {
      this.errormsg = "All fields are required!";
    }
  }

  editForm() {
    if (this.directorForm.valid) {
      const formData = this.directorForm.value;
      this.service.updateDirector(formData, this.getID).subscribe((res) => {
        this.directorForm.reset();
        this.successmsg = res.message;
      })
    }
    else {
      this.errormsg = "All fields are required!";
    }
  }
}