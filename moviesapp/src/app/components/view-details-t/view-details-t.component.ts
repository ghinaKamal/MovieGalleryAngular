import { Component, OnInit } from '@angular/core';
import { Tvshow } from 'src/app/Tvshow';
import { TvshowService } from 'src/app/services/tvshow.service';

@Component({
  selector: 'app-view-details-t',
  templateUrl: './view-details-t.component.html',
  styleUrls: ['./view-details-t.component.css']
})
export class ViewDetailsTComponent implements OnInit {
  tvshows: Tvshow[] = [];

  constructor(private tvshowService : TvshowService) { }

  ngOnInit(): void {
    this.tvshowService.getTopTvShows().subscribe((tvshows) => this.tvshows = tvshows)
  }

}
