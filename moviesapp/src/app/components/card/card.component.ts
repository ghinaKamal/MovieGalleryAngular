import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Movie} from '../../Movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(private router: Router) { }

  onClick(){
    // this.router.navigateByUrl('/view-movie');
    this.router.navigate(['/view-details'], 
    { queryParams: { id: this.movie.id } });
  }

  ngOnInit(): void {
  }

}
