import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css']
})

export class ActorFormComponent implements OnInit {

  errormsg: string = '';
  successmsg: string = '';
  getID: any;

  constructor(private service: ApiserviceService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.getID = this.router.snapshot.paramMap.get('id');
    if (this.getID) {
      this.service.getSingleActor(this.getID).subscribe((res) => {
        this.actorForm.patchValue({
          actorName: res[0].ActorName,
          actorMobileNumber: res[0].MobileNumber,
          fanbaseName: res[0].FanBaseName,
          address: res[0].Address
        })
      });
    }
  }

  actorForm = new FormGroup({
    'actorName': new FormControl('', Validators.required),
    'actorMobileNumber': new FormControl('', Validators.required),
    'fanbaseName': new FormControl('', Validators.required),
    'address': new FormControl('', Validators.required)
  })

  addForm() {
    if (this.actorForm.valid) {
      const formData = this.actorForm.value;
      this.service.insertActor(formData).subscribe((res) => {
        this.actorForm.reset();
        this.successmsg = res.message;
      })
    }
    else {
      this.errormsg = "All fields are required!";
    }
  }

  editForm() {
    if (this.actorForm.valid) {
      const formData = this.actorForm.value;
      this.service.updateActor(formData, this.getID).subscribe((res) => {
        this.actorForm.reset();
        this.successmsg = res.message;
        // this.route.navigate(['/actor']);
      })
    }
    else {
      this.errormsg = "All fields are required!";
    }
  }
}