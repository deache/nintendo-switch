import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';


@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  constructor(private http: HttpClient) { }

  getGamesData(): Observable<Game[]> {
    const url: string = './games.json';
    return this.http.get<Game[]>(url);
  }
}
