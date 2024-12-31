import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSheetPerfilComponent } from './player-sheet-perfil.component';

describe('PlayerSheetPerfilComponent', () => {
  let component: PlayerSheetPerfilComponent;
  let fixture: ComponentFixture<PlayerSheetPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSheetPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSheetPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
