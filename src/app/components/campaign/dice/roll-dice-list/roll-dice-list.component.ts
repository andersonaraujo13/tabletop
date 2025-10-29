import { Component, effect, inject } from '@angular/core';
import { RollDiceComponent } from "../roll-dice/roll-dice.component";
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { RollDice } from '../../../../class/campaign/dice/roll-dice.class';
import { RedisClientService } from '../../../../service/message/redis/redis-client.service';

@Component({
  selector: 'app-roll-dice-list',
  standalone: true,
  imports: [RollDiceComponent, ScrollPanelModule],
  templateUrl: './roll-dice-list.component.html',
  styleUrl: './roll-dice-list.component.scss',
})
export class RollDiceListComponent {
  #messageServiceApi = inject(RedisClientService);
  public rollDiceList: Array<RollDice> = [];

  public receiveRoll(roll: RollDice) {
    this.rollDiceList.unshift(roll);
  }

  constructor() {
    effect(() =>{
      if(this.#messageServiceApi.rollDiceSignal().resultadoFinal != null){
        this.receiveRoll(this.#messageServiceApi.rollDiceSignal());
      }
    });

    let roll1 = new RollDice();
    roll1.nomePlayer = 'Geraldo da Estrela';
    roll1.nomePericia = 'Espada Longa';
    roll1.formula = '1D8 + 5';
    roll1.resultadoFinal = 15;

    let roll2 = new RollDice();
    roll2.nomePlayer = 'Geraldo da Estrela';
    roll2.nomePericia = 'Furtividade';
    roll2.formula = '1D20 + 5';
    roll2.resultadoFinal = 16;

    let roll3 = new RollDice();
    roll3.nomePlayer = 'Geraldo da Estrela';
    roll3.nomePericia = 'Furtividade';
    roll3.formula = '1D20 + 5';
    roll3.resultadoFinal = 17;

    let roll4 = new RollDice();
    roll4.nomePlayer = 'Geraldo da Estrela';
    roll4.nomePericia = 'Furtividade';
    roll4.formula = '1D20 + 5';
    roll4.resultadoFinal = 18;

    let roll5 = new RollDice();
    roll5.nomePlayer = 'Geraldo da Estrela';
    roll5.nomePericia = 'Furtividade';
    roll5.formula = '1D20 + 5';
    roll5.resultadoFinal = 19;

    let roll6 = new RollDice();
    roll6.nomePlayer = 'Geraldo da Estrela';
    roll6.nomePericia = 'Furtividade';
    roll6.formula = '1D20 + 5';
    roll6.resultadoFinal = 20;

    this.rollDiceList.unshift(roll1);
    this.rollDiceList.unshift(roll2);
    this.rollDiceList.unshift(roll3);
    this.rollDiceList.unshift(roll4);
    this.rollDiceList.unshift(roll5);
    this.rollDiceList.unshift(roll6);
    this.rollDiceList.unshift(roll1);
    this.rollDiceList.unshift(roll2);
    this.rollDiceList.unshift(roll3);
    this.rollDiceList.unshift(roll4);
    this.rollDiceList.unshift(roll5);
    this.rollDiceList.unshift(roll6);
  }
}
