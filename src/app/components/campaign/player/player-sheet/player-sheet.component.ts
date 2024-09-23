import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { PlayerSheetSkillComponent } from "../player-sheet-skill/player-sheet-skill.component";
import { PlayerSheetSkillListComponent } from "../player-sheet-skill-list/player-sheet-skill-list.component";
@Component({
  selector: 'app-player-sheet',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, PlayerSheetSkillComponent, PlayerSheetSkillListComponent],
  templateUrl: './player-sheet.component.html',
  styleUrl: './player-sheet.component.scss'
})
export class PlayerSheetComponent {

}
