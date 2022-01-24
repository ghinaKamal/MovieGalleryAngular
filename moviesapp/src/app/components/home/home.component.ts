import { Component, OnInit } from '@angular/core';
import {Movie} from '../../Movie';
import {MovieService} from '../../services/movie.service';
import { Tvshow } from 'src/app/Tvshow';
import { TvshowService } from 'src/app/services/tvshow.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tvshows: Tvshow[] = [];

  movies: Movie[] = [];

  constructor(private movieService : MovieService, private tvshowService : TvshowService) { }

  ngOnInit(): void {
    this.movieService.getTopMovies().subscribe((movies) => this.
    movies= movies);

    this.tvshowService.getTopTvShows().subscribe((tvshows) => this.tvshows = tvshows)

  }

}
