import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerShieldListComponent } from './player-shield-list.component';

describe('PlayerShieldListComponent', () => {
  let component: PlayerShieldListComponent;
  let fixture: ComponentFixture<PlayerShieldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerShieldListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerShieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
