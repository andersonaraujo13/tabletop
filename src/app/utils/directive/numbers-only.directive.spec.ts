import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NumbersOnlyDirective } from './numbers-only.directive';

@Component({
  standalone: true,
  imports: [FormsModule, NumbersOnlyDirective],
  template: `<input numbersOnly [(ngModel)]="value">`
})
class HostComponent { value = '' }

describe('NumbersOnlyDirective', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, NumbersOnlyDirective, HostComponent],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('should create an instance on an input element', () => {
    const inputDebug = fixture.debugElement.query(By.css('input'));
    const dir = inputDebug.injector.get(NumbersOnlyDirective);
    expect(dir).toBeTruthy();
  });
});
