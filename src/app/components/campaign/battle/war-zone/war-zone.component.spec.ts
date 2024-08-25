import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarZoneComponent } from './war-zone.component';

describe('WarZoneComponent', () => {
  let component: WarZoneComponent;
  let fixture: ComponentFixture<WarZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
