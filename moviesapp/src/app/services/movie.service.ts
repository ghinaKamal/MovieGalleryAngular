import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../Movie';
import {MovieDetails} from '../MovieDetails'

const httpOptions = {
  headers: new HttpHeaders({
    'api_key': 'ddf9442c69a1aa97524b66e3cba8b9b0',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://localhost:7294/topMovies'
  private movieDetailsUrl = 'https://localhost:7294/movieDetails/getMovieDetails'

  constructor(private http: HttpClient) {}

  getTopMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl, httpOptions);
  }

  getMovieDetails(movie_id: number): Observable<MovieDetails[]>{
    const url = `${this.movieDetailsUrl}/${movie_id}`;
    // let params = new HttpParams().set("movie_id",movie_id);
    // const headers = new HttpHeaders().append('api_key', 'ddf9442c69a1aa97524b66e3cba8b9b0');
    
    return this.http.get<MovieDetails[]>(url, httpOptions);

  }
 
  

}
