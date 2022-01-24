import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Tvshow } from 'src/app/Tvshow';

@Component({
  selector: 'app-card-tvshows',
  templateUrl: './card-tvshows.component.html',
  styleUrls: ['./card-tvshows.component.css']
})
export class CardTvshowsComponent implements OnInit {
  @Input() tvshow!: Tvshow;

  constructor(private router: Router) { }

  onClick(){
    // this.router.navigateByUrl('/view-movie');
    this.router.navigate(['/view-details-t'], 
    { queryParams: { id: this.tvshow.id } });
  }

  ngOnInit(): void {
  }

}
