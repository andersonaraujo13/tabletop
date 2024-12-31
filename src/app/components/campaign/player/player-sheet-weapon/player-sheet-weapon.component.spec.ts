import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSheetWeaponComponent } from './player-sheet-weapon.component';

describe('PlayerSheetWeaponComponent', () => {
  let component: PlayerSheetWeaponComponent;
  let fixture: ComponentFixture<PlayerSheetWeaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSheetWeaponComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSheetWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
