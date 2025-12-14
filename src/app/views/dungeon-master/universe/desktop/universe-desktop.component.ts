import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  imports: [TableModule, CommonModule],
  templateUrl: './universe-desktop.component.html',
  styleUrl: './universe-desktop.component.scss',
})
export default class UniverseDesktopComponent implements OnInit {
  products: { code: string; name: string; category: string; quantity: number }[] = [
    { code: 'P001', name: 'Espada Longa', category: 'Armas', quantity: 3 },
    { code: 'P002', name: 'Cota de Malha', category: 'Armaduras', quantity: 2 },
    { code: 'P003', name: 'Poção de Cura', category: 'Consumíveis', quantity: 15 },
    { code: 'P004', name: 'Ração', category: 'Suprimentos', quantity: 25 },
    { code: 'P005', name: 'Arco Curto', category: 'Armas', quantity: 4 },
    { code: 'P006', name: 'Flechas (20)', category: 'Munição', quantity: 40 },
    { code: 'P007', name: 'Anel de Proteção', category: 'Acessórios', quantity: 1 },
    { code: 'P008', name: 'Pergaminho de Fogo', category: 'Magia', quantity: 5 }
  ];

  ngOnInit() {

  }
}
