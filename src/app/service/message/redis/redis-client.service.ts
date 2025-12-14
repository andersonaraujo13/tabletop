import { Injectable, signal } from '@angular/core';
import { RollDice } from '../../../class/campaign/dice/roll-dice.class';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class RedisClientService {
  public rollDiceSignal = signal<RollDice>(new RollDice());
  private url = 'http://localhost:3000';
  private socket: Socket;

  constructor() {
     this.socket = io(this.url);
     this.socket.emit('join', 'myChannel');

     this.socket.on("message", (msg) => {
        console.log("Mensagem recebida do servidor:", msg);
        this.rollDiceSignal.set(JSON.parse(msg));
    });

    this.socket.on("error", (msg) => {
        console.log("Mensagem recebida do servidor:", msg);
    });

   }

  public connect() {

  }

  public roll( roll:RollDice ){

  }
}
