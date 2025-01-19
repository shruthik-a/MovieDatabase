import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css']
})
export class GenreFormComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute) { }

  errormsg: string = '';
  successmsg: string = '';
  getID: any;

  ngOnInit(): void {
    this.getID = this.router.snapshot.paramMap.get('id');
    if (this.getID) {
      this.service.getSingleGenre(this.getID).subscribe((res) => {
        this.genreForm.patchValue({
          genreName: res[0].GenreName
        })
      })
    }
  }

  genreForm = new FormGroup({
    'genreName': new FormControl('', Validators.required)
  })

  addForm() {
    if (this.genreForm.valid) {
      const formData = this.genreForm.value;
      this.service.insertGenre(formData).subscribe((res) => {
        this.genreForm.reset();
        this.successmsg = res.message;
      })
    }
    else {
      this.errormsg = "All fields are required!";
    }
  }

  editForm() {
    if (this.genreForm.valid) {
      const formData = this.genreForm.value;
      this.service.updateGenre(formData, this.getID).subscribe((res) => {
        this.genreForm.reset();
        this.successmsg = res.message;
      })
    }
    else {
      this.errormsg = "All fields are required!";
    }
  }
}