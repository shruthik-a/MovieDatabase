import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  apiUrl = "http://localhost:3002";

  getData(endpoint: string): Observable<any> {
    return this._http.get(`${this.apiUrl}${endpoint}`);
  }

  postData(endpoint: string, data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}${endpoint}`, data);
  }

  putData(endpoint: string, data: any): Observable<any> {
    return this._http.put(`${this.apiUrl}${endpoint}`, data);
  }
  deleteData(endpoint: string): Observable<any> {
    return this._http.delete(`${this.apiUrl}${endpoint}`);
  }
  //actor
  getAllActors(): Observable<any> {
    return this.getData('/actors');
  }
  getSingleActor(id: any): Observable<any> {
    return this.getData(`/actor/${id}`);
  }
  insertActor(data: any): Observable<any> {
    return this.postData('/insertActor', data);
  }
  updateActor(data: any, id: any): Observable<any> {
    return this.putData(`/updateActor/${id}`, data);
  }
  deleteActor(id: any): Observable<any> {
    return this.deleteData(`/actor/${id}`);
  }
  //director
  getAllDirectors(): Observable<any> {
    return this.getData('/directors');
  }
  getSingleDirector(id: any): Observable<any> {
    return this.getData(`/director/${id}`);
  }
  insertDirector(data: any): Observable<any> {
    return this.postData('/insertDirector', data);
  }
  updateDirector(data: any, id: any): Observable<any> {
    return this.putData(`/updateDirector/${id}`, data);
  }
  deleteDirector(id: any): Observable<any> {
    return this.deleteData(`/director/${id}`);
  }
  //genre
  getAllGenres(): Observable<any> {
    return this.getData('/genres');
  }
  deleteGenre(id: any): Observable<any> {
    return this.deleteData(`/genre/${id}`);
  }
  getSingleGenre(id: any): Observable<any> {
    return this.getData(`/genre/${id}`);
  }
  insertGenre(data: any): Observable<any> {
    return this.postData('/insertGenre', data);
  }
  updateGenre(data: any, id: any): Observable<any> {
    return this.putData(`/updateGenre/${id}`, data);
  }
  //language
  getAllLanguages(): Observable<any> {
    return this.getData('/languages');
  }
  deleteLanguage(id: any): Observable<any> {
    return this.deleteData(`/language/${id}`);
  }
  getSingleLanguage(id: any): Observable<any> {
    return this.getData(`/language/${id}`);
  }
  insertLanguage(data: any): Observable<any> {
    return this.postData('/insertLanguage', data);
  }
  updateLanguage(data: any, id: any): Observable<any> {
    return this.putData(`/updateLanguage/${id}`, data);
  }
  //producer
  getAllProducers(): Observable<any> {
    return this.getData('/producers');
  }
  deleteProducer(id: any): Observable<any> {
    return this.deleteData(`/producer/${id}`);
  }
  getSingleProducer(id: any): Observable<any> {
    return this.getData(`/producer/${id}`);
  }
  insertProducer(data: any): Observable<any> {
    return this.postData('/insertProducer', data);
  }
  updateProducer(data: any, id: any): Observable<any> {
    return this.putData(`/updateProducer/${id}`, data);
  }
  //movie
  getAllMovies(): Observable<any> {
    return this.getData('/movies');
  }
  deleteMovie(id: any): Observable<any> {
    return this.deleteData(`/movie/${id}`);
  }
  getSingleMovie(id: any): Observable<any> {
    return this.getData(`/movie/${id}`);
  }
  insertMovie(data: any): Observable<any> {
    return this.postData('/insertMovie', data);
  }
  updateMovie(data: any, id: any): Observable<any> {
    return this.putData(`/updateMovie/${id}`, data);
  }
  //getDetails
  getActorDetails(id: any): Observable<any> {
    return this.getData(`/actorDetails/${id}`);
  }
  getDirectorDetails(id: any): Observable<any> {
    return this.getData(`/directorDetails/${id}`);
  }
  getMovies(): Observable<any> {
    return this.getData('/getMovies');
  }
  getMovieDetails(id: any): Observable<any> {
    return this.getData(`/movieDetails/${id}`);
  }
}
