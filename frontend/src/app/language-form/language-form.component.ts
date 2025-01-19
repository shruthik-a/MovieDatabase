import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})

export class LanguageFormComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute) { }

  errormsg: string = '';
  successmsg: string = '';
  getID: any;

  ngOnInit(): void {
    this.getID = this.router.snapshot.paramMap.get('id');
    if (this.getID) {
      this.service.getSingleLanguage(this.getID).subscribe((res) => {
        this.languageForm.patchValue({
          languageName: res[0].LanguageName
        })
      })
    }
  }

  languageForm = new FormGroup({
    'languageName': new FormControl('', Validators.required)
  })

  addForm() {
    if (this.languageForm.valid) {
      const formData = this.languageForm.value;
      this.service.insertLanguage(formData).subscribe((res) => {
        this.languageForm.reset();
        this.successmsg = res.message;
      })
    }
    else {
      this.errormsg = "All fields are required!";
    }
  }

  editForm() {
    if (this.languageForm.valid) {
      const formData = this.languageForm.value;
      this.service.updateLanguage(formData, this.getID).subscribe((res) => {
        this.languageForm.reset();
        this.successmsg = res.message;
      })
    }
    else {
      this.errormsg = "All fields are required!";
    }
  }
}
