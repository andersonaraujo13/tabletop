import { Equipment } from "./equipment.class";

export class Shield extends Equipment {
  bonusCA:Number;
  bonusMaxDes: Number;
  penalidade: Number;
  deslocamento: Number;

  override getBonusCA(): Number {
      return 10;
  }

  override getBonusMaxDestreza(): Number {
      return 10;
  }

  override getPenalidade(): Number {
      return 10;
  }
}
