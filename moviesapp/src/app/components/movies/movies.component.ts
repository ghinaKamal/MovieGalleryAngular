import { Component, OnInit, Input} from '@angular/core';
import {Movie} from '../../Movie';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() movie!: Movie;
  
  movies: Movie[] = [];

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.movieService.getTopMovies().subscribe((movies) => this.
    movies= movies);
  }

}