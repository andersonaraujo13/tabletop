import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CarouselModule } from 'primeng/carousel';

@Component({
  imports: [MatCardModule, MatChipsModule, CarouselModule],
  templateUrl: './dashboard-desktop.component.html',
  styleUrl: './dashboard-desktop.component.scss',
})
export default class DashboardDesktopComponent implements OnInit {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
  universe: any[];

  ngOnInit(): void {
    this.universe = Array.from({ length: 0 }, () => {
      const id = Math.floor(Math.random() * 10000);
      return `Produto-${id}`;
    });
  }
}
