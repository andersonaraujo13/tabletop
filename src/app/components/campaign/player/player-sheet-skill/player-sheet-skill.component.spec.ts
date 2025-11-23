import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSheetSkillComponent } from './player-sheet-skill.component';

describe('PlayerSheetSkillComponent', () => {
  let component: PlayerSheetSkillComponent;
  let fixture: ComponentFixture<PlayerSheetSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSheetSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSheetSkillComponent);
    component = fixture.componentInstance;
    // initialize required @Input
    component.skill = new (await import('../../../../class/campaign/player/skill.class')).Skill();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
