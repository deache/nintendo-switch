import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFavoriteItemComponent } from './game-favorite-item.component';

describe('GameFavoriteItemComponent', () => {
  let component: GameFavoriteItemComponent;
  let fixture: ComponentFixture<GameFavoriteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFavoriteItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameFavoriteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
