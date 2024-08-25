import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerShieldComponent } from './player-shield.component';

describe('PlayerShieldComponent', () => {
  let component: PlayerShieldComponent;
  let fixture: ComponentFixture<PlayerShieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerShieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
