import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CarouselModule } from 'primeng/carousel';

@Component({
  imports: [ MatCardModule, MatChipsModule, CarouselModule],
  templateUrl: './dashboard-mobile.component.html',
  styleUrl: './dashboard-mobile.component.scss',
})
export default class DashboardMobileComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
}
