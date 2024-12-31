import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSheetGrimoireComponent } from './player-sheet-grimoire.component';

describe('PlayerSheetGrimoireComponent', () => {
  let component: PlayerSheetGrimoireComponent;
  let fixture: ComponentFixture<PlayerSheetGrimoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSheetGrimoireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSheetGrimoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
