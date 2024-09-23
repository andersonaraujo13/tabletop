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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
