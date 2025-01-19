import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})

export class MovieFormComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute) { }

  errormsg: string = '';
  successmsg: string = '';
  getID: any;

  ngOnInit(): void {
    this.getID = this.router.snapshot.paramMap.get('id');
    if (this.getID) {
      this.service.getSingleMovie(this.getID).subscribe((res) => {
        const releaseDate = new Date(res[0].ReleaseDate).toISOString().split('T')[0];
        const theaterLastDay = new Date(res[0].LastDateAtTheater).toISOString().split('T')[0];
        this.movieForm.patchValue({
          movieName: res[0].MovieName,
          duration: res[0].MovieDuration,
          synopsis: res[0].Synopsis,
          release: releaseDate,
          theaterLastDay: theaterLastDay,
          budget: res[0].TotalBudget,
          languageID: res[0].LanguageID,
          genreID: res[0].GenreID,
          directorID: res[0].DirectorID,
          producerID: res[0].ProducerID,
          poster: res[0].poster
        });
      });
    }
  }

  movieForm = new FormGroup({
    'movieName': new FormControl('', Validators.required),
    'duration': new FormControl('', Validators.required),
    'synopsis': new FormControl('', Validators.required),
    'release': new FormControl('', Validators.required),
    'theaterLastDay': new FormControl('', Validators.required),
    'budget': new FormControl('', Validators.required),
    'languageID': new FormControl('', Validators.required),
    'genreID': new FormControl('', Validators.required),
    'directorID': new FormControl('', Validators.required),
    'producerID': new FormControl('', Validators.required),
    'poster': new FormControl('', Validators.required)
  })

  addForm() {
    if (this.movieForm.valid) {
      const formData = this.movieForm.value;
      const days = this.calculateDays(formData.release, formData.theaterLastDay);
      const finalData = {
        ...formData,
        days
      }
      this.service.insertMovie(finalData).subscribe((res) => {
        this.movieForm.reset();
        this.successmsg = res.message;
      })
    }
    else{
      this.errormsg = "All fields are required!";
    }
  }
  editForm() {
    if (this.movieForm.valid) {
      const formData = this.movieForm.value;
      const days = this.calculateDays(formData.release, formData.theaterLastDay);
      const finalData = {
        ...formData,
        days
      }
      this.service.updateMovie(finalData, this.getID).subscribe((res) => {
        this.movieForm.reset();
        this.successmsg = res.message;
      })
    }
    else{
      this.errormsg = "All fields are required!";
    }
  }
  calculateDays(release: any, last: any) {
    const releaseDate = new Date(release);
    const lastDayDate = new Date(last);
    if (isNaN(releaseDate.getTime()) || isNaN(lastDayDate.getTime())) {
      return 0;
    }
    const timeDifference = lastDayDate.getTime() - releaseDate.getTime();
    const dayDifference = timeDifference / (1000 * 3600 * 24);
    return dayDifference;
  }
}