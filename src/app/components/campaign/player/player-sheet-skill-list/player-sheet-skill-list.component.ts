import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../class/campaign/player/skill.class';
import { PlayerSheetSkillComponent } from "../player-sheet-skill/player-sheet-skill.component";
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-player-sheet-skill-list',
  standalone: true,
  imports: [PlayerSheetSkillComponent, ScrollPanelModule],
  templateUrl: './player-sheet-skill-list.component.html',
  styleUrl: './player-sheet-skill-list.component.scss'
})
export class PlayerSheetSkillListComponent implements OnInit{
  public skillList: Array<Skill> = [];

  ngOnInit(): void {
    let skill1 = new Skill();
    skill1.pericia = 'Conjuração';
    skill1.atributo = 'INT'
    skill1.graduacao = 2;
    skill1.modificadorAtributo = 4
    skill1.modificadorVariado = 3
    skill1.possui = false;
    skill1.treinado = true;

    let skill2 = new Skill();
    skill2.pericia = 'Conjuração';
    skill2.atributo = 'INT'
    skill2.graduacao = 2;
    skill2.modificadorAtributo = 4
    skill2.modificadorVariado = 3
    skill2.possui = true;
    skill2.treinado = false;

    let skill3 = new Skill();
    skill3.pericia = 'Conjuração';
    skill3.atributo = 'INT'
    skill3.graduacao = 2;
    skill3.modificadorAtributo = 4
    skill3.modificadorVariado = 3
    skill3.possui = false;
    skill2.treinado = true;

    let skill4 = new Skill();
    skill4.pericia = 'Conjuração';
    skill4.atributo = 'INT'
    skill4.graduacao = 2;
    skill4.modificadorAtributo = 4
    skill4.modificadorVariado = 3
    skill4.possui = false;
    skill4.treinado = true;

    let skill5 = new Skill();
    skill5.pericia = 'Conjuração';
    skill5.atributo = 'INT'
    skill5.graduacao = 2;
    skill5.modificadorAtributo = 4
    skill5.modificadorVariado = 3
    skill5.possui = true;
    skill5.treinado = true;

    let skill6 = new Skill();
    skill6.pericia = 'Conjuração';
    skill6.atributo = 'INT'
    skill6.graduacao = 2;
    skill6.modificadorAtributo = 4
    skill6.modificadorVariado = 3
    skill6.possui = false;
    skill6.treinado = true;

    let skill7 = new Skill();
    skill7.pericia = 'Conjuração';
    skill7.atributo = 'INT'
    skill7.graduacao = 2;
    skill7.modificadorAtributo = 4
    skill7.modificadorVariado = 3
    skill7.possui = true;
    skill7.treinado = false;

    let skill8 = new Skill();
    skill8.pericia = 'Conjuração';
    skill8.atributo = 'INT'
    skill8.graduacao = 2;
    skill8.modificadorAtributo = 4
    skill8.modificadorVariado = 3
    skill8.possui = false;
    skill8.treinado = false;

    let skill9 = new Skill();
    skill9.pericia = 'Conjuração';
    skill9.atributo = 'INT'
    skill9.graduacao = 2;
    skill9.modificadorAtributo = 4
    skill9.modificadorVariado = 3
    skill9.possui = true;
    skill9.treinado = true;

    let skill10 = new Skill();
    skill10.pericia = 'Conjuração';
    skill10.atributo = 'INT'
    skill10.graduacao = 2;
    skill10.modificadorAtributo = 4
    skill10.modificadorVariado = 3
    skill10.possui = true;
    skill10.treinado = true;

    let skill11 = new Skill();
    skill11.pericia = 'Conjuração';
    skill11.atributo = 'INT'
    skill11.graduacao = 2;
    skill11.modificadorAtributo = 4
    skill11.modificadorVariado = 3
    skill11.possui = true;
    skill11.treinado = true;

    let skill12 = new Skill();
    skill12.pericia = 'Conjuração';
    skill12.atributo = 'INT'
    skill12.graduacao = 2;
    skill12.modificadorAtributo = 4
    skill12.modificadorVariado = 3
    skill12.possui = true;
    skill12.treinado = true;

    let skill13 = new Skill();
    skill13.pericia = 'Conjuração';
    skill13.atributo = 'INT'
    skill13.graduacao = 2;
    skill13.modificadorAtributo = 4
    skill13.modificadorVariado = 3
    skill13.possui = true;
    skill13.treinado = true;

    let skill14 = new Skill();
    skill14.pericia = 'Conjuração';
    skill14.atributo = 'INT'
    skill14.graduacao = 2;
    skill14.modificadorAtributo = 4
    skill14.modificadorVariado = 3
    skill14.possui = true;
    skill14.treinado = true;

    let skill15 = new Skill();
    skill15.pericia = 'Conjuração';
    skill15.atributo = 'INT'
    skill15.graduacao = 2;
    skill15.modificadorAtributo = 4
    skill15.modificadorVariado = 3
    skill15.possui = true;
    skill15.treinado = true;

    let skill16 = new Skill();
    skill16.pericia = 'Conjuração';
    skill16.atributo = 'INT'
    skill16.graduacao = 2;
    skill16.modificadorAtributo = 4
    skill16.modificadorVariado = 3
    skill16.possui = true;
    skill16.treinado = true;

    let skill17 = new Skill();
    skill17.pericia = 'Conjuração';
    skill17.atributo = 'INT'
    skill17.graduacao = 2;
    skill17.modificadorAtributo = 4
    skill17.modificadorVariado = 3
    skill17.possui = true;
    skill17.treinado = true;

    let skill18 = new Skill();
    skill18.pericia = 'Conjuração';
    skill18.atributo = 'INT'
    skill18.graduacao = 2;
    skill18.modificadorAtributo = 4
    skill18.modificadorVariado = 3
    skill18.possui = true;
    skill18.treinado = true;

    let skill19 = new Skill();
    skill19.pericia = 'Conjuração';
    skill19.atributo = 'INT'
    skill19.graduacao = 2;
    skill19.modificadorAtributo = 4
    skill19.modificadorVariado = 3
    skill19.possui = true;
    skill19.treinado = true;

    let skill20 = new Skill();
    skill20.pericia = 'Conjuração';
    skill20.atributo = 'INT'
    skill20.graduacao = 2;
    skill20.modificadorAtributo = 4
    skill20.modificadorVariado = 3
    skill20.possui = true;
    skill20.treinado = true;

    this.skillList.push(skill1);
    this.skillList.push(skill2);
    this.skillList.push(skill3);
    this.skillList.push(skill4);
    this.skillList.push(skill5);
    this.skillList.push(skill6);
    this.skillList.push(skill7);
    this.skillList.push(skill8);
    this.skillList.push(skill9);
    this.skillList.push(skill10);
    this.skillList.push(skill11);
    this.skillList.push(skill12);
    this.skillList.push(skill13);
    this.skillList.push(skill14);
    this.skillList.push(skill15);
    this.skillList.push(skill16);
    this.skillList.push(skill17);
    this.skillList.push(skill18);
    this.skillList.push(skill19);
    this.skillList.push(skill20);
  }
}
