import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollDiceListComponent } from './roll-dice-list.component';

describe('RollDiceListComponent', () => {
  let component: RollDiceListComponent;
  let fixture: ComponentFixture<RollDiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollDiceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollDiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
