import { Component, inject, OnInit } from '@angular/core';
import { WarZoneComponent } from '../../../components/campaign/battle/war-zone/war-zone.component';
import { RollDiceListComponent } from '../../../components/campaign/dice/roll-dice-list/roll-dice-list.component';
import { PlayerSheetComponent } from '../../../components/campaign/player/player-sheet/player-sheet.component';
import { PlayerShieldListComponent } from '../../../components/campaign/player/player-shield-list/player-shield-list.component';
import { MasterShieldComponent } from '../../../components/campaign/master/master-shield/master-shield.component';
import { RedisClientService } from '../../../service/message/redis/redis-client.service';

@Component({
  selector: 'app-tabletop',
  standalone: true,
  imports: [
    RollDiceListComponent,
    WarZoneComponent,
    PlayerSheetComponent,
    PlayerShieldListComponent,
    MasterShieldComponent,
  ],
  templateUrl: './tabletop.component.html',
  styleUrl: './tabletop.component.scss',
})
export default class TabletopComponent implements OnInit {
  #messageServiceApi = inject(RedisClientService);

  ngOnInit() {
    /*this.#messageServiceApi.getMessages().subscribe(value => {
      console.log(value);
    //  this.notificationList.push(value);
    });*/
  }
}
