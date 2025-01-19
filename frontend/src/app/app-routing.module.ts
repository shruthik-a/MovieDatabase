import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { DirectorComponent } from './director/director.component';
import { DirectorFormComponent } from './director-form/director-form.component';
import { GenreComponent } from './genre/genre.component';
import { GenreFormComponent } from './genre-form/genre-form.component';
import { LanguageComponent } from './language/language.component';
import { LanguageFormComponent } from './language-form/language-form.component';
import { ProducerComponent } from './producer/producer.component';
import { ProducerFormComponent } from './producer-form/producer-form.component';
import { MovieComponent } from './movie/movie.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { DirectorDetailComponent } from './director-detail/director-detail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  //actor
  { path: 'actor', component: ActorComponent },
  { path: 'actorForm', component: ActorFormComponent },
  { path: 'addActor', component: ActorFormComponent },
  { path: 'editActor/:id', component: ActorFormComponent },
  //director
  { path: 'director', component: DirectorComponent },
  { path: 'directorForm', component: DirectorFormComponent },
  { path: 'addDirector', component: DirectorFormComponent },
  { path: 'editDirector/:id', component: DirectorFormComponent },
  //genre
  { path: 'genre', component: GenreComponent },
  { path: 'genreForm', component: GenreFormComponent },
  { path: 'addGenre', component: GenreFormComponent },
  { path: 'editGenre/:id', component: GenreFormComponent },
  //language
  { path: 'language', component: LanguageComponent },
  { path: 'languageForm', component: LanguageFormComponent },
  { path: 'addLanguage', component: LanguageFormComponent },
  { path: 'editLanguage/:id', component: LanguageFormComponent },
  //producer
  { path: 'producer', component: ProducerComponent },
  { path: 'producerForm', component: ProducerFormComponent },
  { path: 'addProducer', component: ProducerFormComponent },
  { path: 'editProducer/:id', component: ProducerFormComponent },
  //movie
  { path: 'movie', component: MovieComponent },
  { path: 'movieForm', component: MovieFormComponent },
  { path: 'addMovie', component: MovieFormComponent },
  { path: 'editMovie/:id', component: MovieFormComponent },
  //details
  { path: 'actorDetails/:id', component: ActorDetailComponent },
  { path: 'directorDetails/:id', component: DirectorDetailComponent },
  { path: 'movieDetail/:id', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }