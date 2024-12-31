import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-player-sheet-bag',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './player-sheet-bag.component.html',
  styleUrl: './player-sheet-bag.component.scss',
})
export class PlayerSheetBagComponent {
  selected = "";
}
