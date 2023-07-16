import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFavoritesComponent } from './game-favorites.component';

describe('GameFavoritesComponent', () => {
  let component: GameFavoritesComponent;
  let fixture: ComponentFixture<GameFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFavoritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
