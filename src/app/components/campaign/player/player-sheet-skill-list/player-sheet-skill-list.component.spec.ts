import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSheetSkillListComponent } from './player-sheet-skill-list.component';

describe('PlayerSheetSkillListComponent', () => {
  let component: PlayerSheetSkillListComponent;
  let fixture: ComponentFixture<PlayerSheetSkillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSheetSkillListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSheetSkillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
