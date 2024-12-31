import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-player-sheet-weapon',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './player-sheet-weapon.component.html',
  styleUrl: './player-sheet-weapon.component.scss',
})
export class PlayerSheetWeaponComponent {}
