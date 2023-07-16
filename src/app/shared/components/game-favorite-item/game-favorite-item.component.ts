import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-favorite-item',
  templateUrl: './game-favorite-item.component.html',
  styleUrls: ['./game-favorite-item.component.scss']
})
export class GameFavoriteItemComponent {
  @Input() game: Game | undefined;
  @Output() onHeartClicked: EventEmitter<Game> = new EventEmitter();
  @Output() onPurchased: EventEmitter<void> = new EventEmitter();


  heartClicked() {
    this.onHeartClicked.emit(this.game);
  }

  purchaseClicked() {
    this.onPurchased.emit();
  }
}
