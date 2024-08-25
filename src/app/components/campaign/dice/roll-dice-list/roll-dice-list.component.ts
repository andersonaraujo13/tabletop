import { Component } from '@angular/core';
import { RollDiceComponent } from "../roll-dice/roll-dice.component";
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { RollDice } from '../../../../class/campaign/dice/roll-dice.class';

@Component({
  selector: 'app-roll-dice-list',
  standalone: true,
  imports: [RollDiceComponent, ScrollPanelModule],
  templateUrl: './roll-dice-list.component.html',
  styleUrl: './roll-dice-list.component.scss'
})
export class RollDiceListComponent {
  public rollDiceList: Array<RollDice> = [];

  constructor(){
    let roll1 = new RollDice;
    roll1.nomePlayer = 'Geraldo da Estrela'
    roll1.nomePericia = 'Espada Longa';
    roll1.formula = '1D8 + 5';
    roll1.resultadoFinal = 10;

    let roll2 = new RollDice;
    roll2.nomePlayer = 'Geraldo da Estrela'
    roll2.nomePericia = 'Furtividade';
    roll2.formula = '1D20 + 5';
    roll2.resultadoFinal = 20;

    let roll3 = new RollDice;
    roll3.nomePlayer = 'Geraldo da Estrela'
    roll3.nomePericia = 'Furtividade';
    roll3.formula = '1D20 + 5';
    roll3.resultadoFinal = 20;


    let roll4 = new RollDice;
    roll4.nomePlayer = 'Geraldo da Estrela'
    roll4.nomePericia = 'Furtividade';
    roll4.formula = '1D20 + 5';
    roll4.resultadoFinal = 20;


    let roll5 = new RollDice;
    roll5.nomePlayer = 'Geraldo da Estrela'
    roll5.nomePericia = 'Furtividade';
    roll5.formula = '1D20 + 5';
    roll5.resultadoFinal = 20;

    let roll6 = new RollDice;
    roll6.nomePlayer = 'Geraldo da Estrela'
    roll6.nomePericia = 'Furtividade';
    roll6.formula = '1D20 + 5';
    roll6.resultadoFinal = 20;

    this.rollDiceList.push(roll1);
    this.rollDiceList.push(roll2);
    this.rollDiceList.push(roll3);
    this.rollDiceList.push(roll4);
    this.rollDiceList.push(roll5);
    this.rollDiceList.push(roll6);
    this.rollDiceList.push(roll1);
    this.rollDiceList.push(roll2);
    this.rollDiceList.push(roll3);
    this.rollDiceList.push(roll4);
    this.rollDiceList.push(roll5);
    this.rollDiceList.push(roll6);
 }
}
