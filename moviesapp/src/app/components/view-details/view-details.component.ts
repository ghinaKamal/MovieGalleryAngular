import { Component, OnInit } from '@angular/core';
import {Movie} from '../../Movie';
import { MovieDetails } from 'src/app/MovieDetails';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  movies: Movie[] = [];
  movieDetails : MovieDetails[] =[];

  id!: string;


  constructor(private movieService : MovieService, private route: ActivatedRoute) { 
    this.route.queryParams
    .subscribe(params => {
      this.id = params['id'];
    }
    );

  }

  ngOnInit(): void {
    this.movieService.getTopMovies().subscribe((movies) => this.
    movies= movies);

    this.movieService.getMovieDetails(parseInt(this.id)).subscribe((movieDetails) => this.
    movieDetails =movieDetails);
    console.log(this.id)
    console.log(this.movieDetails)

  }
 

}
