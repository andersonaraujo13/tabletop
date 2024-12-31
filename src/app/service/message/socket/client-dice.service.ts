import { Injectable, signal } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { RollDice } from '../../../class/campaign/dice/roll-dice.class';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public url = 'ws://localhost:8080/dice';
  public stompClient = Stomp.client(this.url);

  public rollDiceSignal = signal<RollDice>(new RollDice());

  constructor() { }

  public connect() {
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/rolls', notifications => {
        this.rollDiceSignal.set(JSON.parse(notifications.body));
      });
    });
  }

  public roll( roll:RollDice ){
    this.stompClient.publish({destination: "/app/roll", body: JSON.stringify(roll)});
  }
}
