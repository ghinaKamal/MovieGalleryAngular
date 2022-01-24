import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CardTvshowsComponent } from './components/card-tvshows/card-tvshows.component';
import { ViewDetailsMovieComponent } from './components/view-details-movie/view-details-movie.component';
import { ViewDetailsTvComponent } from './components/view-details-tv/view-details-tv.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { ViewDetailsTComponent } from './components/view-details-t/view-details-t.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'tvshows', component: TvshowsComponent },
  {path: 'movies', component: MoviesComponent },
  {path: 'home', component: HomeComponent },
  {path: 'view-details-movie', component: ViewDetailsMovieComponent},
  {path: 'view-details-tv', component: ViewDetailsTvComponent},
  {path: 'view-details', component: ViewDetailsComponent},
  {path: 'view-details-t', component: ViewDetailsTComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    HomeComponent,
    CardComponent,
    TvshowsComponent,
    FooterComponent,
    MoviesComponent,
    CardTvshowsComponent,
    ViewDetailsTvComponent,
    ViewDetailsMovieComponent,
    ViewDetailsComponent,
    ViewDetailsTComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
