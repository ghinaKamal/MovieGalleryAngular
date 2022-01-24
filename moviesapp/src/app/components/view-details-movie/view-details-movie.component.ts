import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieDetails } from '../../MovieDetails';
import {Movie} from '../../Movie';

@Component({
  selector: 'app-view-details-movie',
  templateUrl: './view-details-movie.component.html',
  styleUrls: ['./view-details-movie.component.css']
})
export class ViewDetailsMovieComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() movieDetail! : MovieDetails;
  id!: string;

  constructor(private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      // console.log(params); 
      this.id = params['id'];
      // console.log(this.id); 
   
  }
  );
}

}
