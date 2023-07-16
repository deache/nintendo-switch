import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input() game: Game | undefined;
  @Output() onHeartClick: EventEmitter<boolean> = new EventEmitter();
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  public heartClicked() {
    this.onHeartClick.emit(!this.game?.isFavorite);
  }
}
