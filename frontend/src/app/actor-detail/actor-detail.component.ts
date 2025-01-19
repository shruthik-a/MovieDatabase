import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})

export class ActorDetailComponent implements OnInit {

  actor: any;
  getID: any;

  constructor(private router: ActivatedRoute, private service: ApiserviceService) { }

  ngOnInit(): void {
    this.getID = this.router.snapshot.paramMap.get('id');
    this.service.getActorDetails(this.getID).subscribe((res) => {
      this.actor = res;
      if (this.actor.AwardNames && this.actor.AwardNames.trim() !== '') {
        const awardNames = this.actor.AwardNames.split(',');
        const awardYears = this.actor.AwardYears.split(',');
        const categories = this.actor.Categories.split(',');
        const work = this.actor.Work.split(',');
        const uniqueAwards: { category: string; name: string; work: string; year: string }[] = [];
        for (let i = 0; i < awardNames.length; i++) {
          const awardExists = uniqueAwards.some(
            award =>
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
        this.actor.awards = uniqueAwards;
      } else {
        this.actor.awards = [];
      }
      this.actor.famousWorks = this.actor.MovieNames.split(',');
    });
  }
}