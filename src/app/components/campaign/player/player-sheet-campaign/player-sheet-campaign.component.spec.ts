import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSheetCampaignComponent } from './player-sheet-campaign.component';

describe('PlayerSheetCampaignComponent', () => {
  let component: PlayerSheetCampaignComponent;
  let fixture: ComponentFixture<PlayerSheetCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSheetCampaignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSheetCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
