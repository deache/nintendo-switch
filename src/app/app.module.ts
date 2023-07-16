import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {
  provideHttpClient,
  withJsonpSupport,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameFavoritesComponent } from './pages/game-favorites/game-favorites.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { gameReducer } from './reducers/game.reducer';
import { GameEffects } from './effects/game.effects';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameFavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    ScrollingModule,
    StoreModule.forRoot({ game: gameReducer }),
    EffectsModule.forRoot([GameEffects]),
  ],
  providers: [
    provideHttpClient(
      withJsonpSupport()
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
