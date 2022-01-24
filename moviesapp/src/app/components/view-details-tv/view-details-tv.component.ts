import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Tvshow } from 'src/app/Tvshow';

@Component({
  selector: 'app-view-details-tv',
  templateUrl: './view-details-tv.component.html',
  styleUrls: ['./view-details-tv.component.css']
})
export class ViewDetailsTvComponent implements OnInit {
  id!: string;
  @Input() tvshow!: Tvshow;
  
  constructor(private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.id = params['id'];
      console.log(this.id); 
   
  }
  );
}

}
