import { EquipmentClass } from "./equipmentClass.enum";

export class Equipment {
  nome: String;
  classe: EquipmentClass;
  peso: Number;
  caracteristica: String;
  tamanho: String;
  propriedade: String;

  getBonusCA(): Number {
    return 0;
  }

  getBonusMaxDestreza(): Number {
    return 0;
  }

  getPenalidade(): Number {
    return 0;
  }
}
