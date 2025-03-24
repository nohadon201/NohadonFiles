import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDevelopmentComponent } from './game-development.component';

describe('NohadengineComponent', () => {
  let component: GameDevelopmentComponent;
  let fixture: ComponentFixture<GameDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameDevelopmentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GameDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
