import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSheetBagComponent } from './player-sheet-bag.component';

describe('PlayerSheetBagComponent', () => {
  let component: PlayerSheetBagComponent;
  let fixture: ComponentFixture<PlayerSheetBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSheetBagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSheetBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
