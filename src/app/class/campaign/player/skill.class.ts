
export class Skill {
  pericia: String;
  atributo: String;
  treinado: boolean;
  possui: boolean;
  modificadorAtributo: number;
  graduacao: number;
  modificadorVariado: number;

  constructor(){
    this.pericia = '';
    this.atributo = '';
    this.treinado = false;
    this.possui = false;
    this.modificadorAtributo = 0;
    this.graduacao = 0;
    this.modificadorVariado = 0;
  }

  get modificadorPericia(){
    return (+this.modificadorAtributo) + (+this.graduacao) + (+this.modificadorVariado);
  }

  get podeRealizarTeste (){
    return this.treinado || this.possui;
  }
}
