import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Tvshow } from '../Tvshow';

const httpOptions = {
  headers: new HttpHeaders({
    'api_key': 'ddf9442c69a1aa97524b66e3cba8b9b0',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  private apiUrl = 'https://localhost:7294/topTvShows'

  constructor(private http: HttpClient) {}

  getTopTvShows(): Observable<Tvshow[]> {
    return this.http.get<Tvshow[]>(this.apiUrl, httpOptions);
    
  }
}
