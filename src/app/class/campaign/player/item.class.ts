import { ItemLocation } from "./itemLocation.enum";
import { ItemQuality } from "./itemquality.enum";

export class Item{
  descricao: String;
  quantidade: Number;
  peso: Number;
  valor: Number;
  local: ItemLocation;
  qualidade: ItemQuality;
}
