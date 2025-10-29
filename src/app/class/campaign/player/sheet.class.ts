import { Equipment } from "./equipment.class";
import { Information } from "./information.class";
import { Item } from "./item.class";
import { Skill } from "./skill.class";
import { Spell } from "./spell.class";

export class Sheet{
  equipamento: Array<Equipment>;
  pericia: Array<Skill>;
  grimorio: Array<Spell>;
  itens: Array<Item>;
  informacao: Array<Information>;
}
