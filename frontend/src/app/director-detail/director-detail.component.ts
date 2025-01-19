import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-director-detail',
  templateUrl: './director-detail.component.html',
  styleUrls: ['./director-detail.component.css']
})

export class DirectorDetailComponent implements OnInit {

  director: any;
  getID: any;

  constructor(private service: ApiserviceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getID = this.router.snapshot.paramMap.get('id');
    this.service.getDirectorDetails(this.getID).subscribe((res) => {
      this.director = res;
      if (this.director.AwardNames && this.director.AwardNames.trim() !== '') {
        const awardNames = this.director.AwardNames.split(',');
        const awardYears = this.director.AwardYears.split(',');
        const categories = this.director.Categories.split(',');
        const work = this.director.Work.split(',');
        const uniqueAwards: { category: string; name: string, work: string, year: string }[] = [];
        for (let i = 0; i < awardNames.length; i++) {
          const awardExists = uniqueAwards.some(award =>
            award.category === categories[i] &&
            award.name === awardNames[i] &&
            award.work === work[i] &&
            award.year === awardYears[i]
          );
          if (!awardExists) {
            uniqueAwards.push({
              category: categories[i],
              name: awardNames[i],
              work: work[i],
              year: awardYears[i]
            });
          }
        }
        this.director.awards = uniqueAwards;
      }
      else {
        this.director.awards = [];
      }
      this.director.famousWorks = this.director.MovieNames.split(',');
    });
  }
}