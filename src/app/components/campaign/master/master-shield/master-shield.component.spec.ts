import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterShieldComponent } from './master-shield.component';

describe('MasterShieldComponent', () => {
  let component: MasterShieldComponent;
  let fixture: ComponentFixture<MasterShieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterShieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
