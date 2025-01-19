import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    AdminComponent,
    HomeComponent,
    ActorFormComponent,
    DirectorComponent,
    DirectorFormComponent,
    GenreComponent,
    GenreFormComponent,
    LanguageComponent,
    LanguageFormComponent,
    ProducerComponent,
    ProducerFormComponent,
    MovieComponent,
    MovieFormComponent,
    ActorDetailComponent,
    DirectorDetailComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }