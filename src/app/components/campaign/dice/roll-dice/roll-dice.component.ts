import { Component, Input } from '@angular/core';
import { RollDice } from '../../../../class/campaign/dice/roll-dice.class';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-roll-dice',
  standalone: true,
  imports: [SkeletonModule],
  templateUrl: './roll-dice.component.html',
  styleUrl: './roll-dice.component.scss'
})
export class RollDiceComponent {

  @Input({required: true})
  public rollDice: RollDice = new RollDice();
}
