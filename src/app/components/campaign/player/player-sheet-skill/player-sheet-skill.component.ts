import { Component, inject, Input } from '@angular/core';
import { RollDice } from '../../../../class/campaign/dice/roll-dice.class';
import { Skill } from '../../../../class/campaign/player/skill.class';
import { ClientService } from '../../../../service/message/rabbitMQ/client.service';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { NumbersOnlyDirective } from '../../../../utils/directive/numbers-only.directive';

@Component({
  selector: 'app-player-sheet-skill',
  standalone: true,
  imports: [FormsModule, NgClass, NumbersOnlyDirective],
  templateUrl: './player-sheet-skill.component.html',
  styleUrl: './player-sheet-skill.component.scss'
})
export class PlayerSheetSkillComponent {
  #messageServiceApi = inject(ClientService);

  @Input({required: true})
  public skill: Skill;

  public roll20(){
    let roll = new RollDice();
    roll.nomePlayer = 'Anderson de Araujo Santos'
    roll.nomePericia = this.skill.pericia;
    roll.formula = '1D20 + ' + this.skill.modificadorPericia;
    this.#messageServiceApi.roll(roll);
  }

  public roll30(){
    let roll = new RollDice();
    roll.nomePlayer = 'Anderson de Araujo Santos'
    roll.nomePericia = this.skill.pericia;
    roll.formula = '1D30 + ' + this.skill.modificadorPericia;
    this.#messageServiceApi.roll(roll);
  }

  public checkSkill(){
    this.skill.possui = !this.skill.possui;
  }
}
