import { Component, OnInit,Input } from '@angular/core';
import { Tvshow } from 'src/app/Tvshow';
import { TvshowService } from 'src/app/services/tvshow.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {
  @Input() tvshow!: Tvshow;
  
  tvshows: Tvshow[] = [];

  constructor(private tvshowService : TvshowService) { }

  ngOnInit(): void {
    this.tvshowService.getTopTvShows().subscribe((tvshows) => this.tvshows = tvshows)
  }

}
