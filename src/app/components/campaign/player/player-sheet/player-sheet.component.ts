import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { PlayerSheetSkillComponent } from '../player-sheet-skill/player-sheet-skill.component';
import { PlayerSheetSkillListComponent } from '../player-sheet-skill-list/player-sheet-skill-list.component';
import { PlayerSheetBagComponent } from '../player-sheet-bag/player-sheet-bag.component';
import { PlayerSheetWeaponComponent } from '../player-sheet-weapon/player-sheet-weapon.component';
import { PlayerSheetGrimoireComponent } from "../player-sheet-grimoire/player-sheet-grimoire.component";
import { PlayerSheetPerfilComponent } from "../player-sheet-perfil/player-sheet-perfil.component";
import { PlayerSheetCampaignComponent } from "../player-sheet-campaign/player-sheet-campaign.component";
@Component({
  selector: 'app-player-sheet',
  standalone: true,
  imports: [
    MatTabsModule,
    MatCardModule,
    PlayerSheetSkillComponent,
    PlayerSheetSkillListComponent,
    PlayerSheetBagComponent,
    PlayerSheetWeaponComponent,
    PlayerSheetGrimoireComponent,
    PlayerSheetPerfilComponent,
    PlayerSheetCampaignComponent
],
  templateUrl: './player-sheet.component.html',
  styleUrl: './player-sheet.component.scss',
})
export class PlayerSheetComponent {}
