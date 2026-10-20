import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComposantPc } from '../model/composant-pc.model';
import { TypeComposant } from '../model/type-composant.model';
import { ComposantPcService } from '../services/composant-pc.service';

@Component({
  selector: 'app-recherche-par-type',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-type.component.html'
})
export class RechercheParTypeComponent implements OnInit {
  composantsPc: ComposantPc[] = [];
  typesComposant: TypeComposant[] = [];
  idType?: number;

  constructor(private composantPcService: ComposantPcService) {}

  ngOnInit(): void {
    this.typesComposant = this.composantPcService.listeTypesComposant();
  }

  onChange(): void {
    this.composantsPc = this.idType === undefined
      ? []
      : this.composantPcService.rechercherParType(Number(this.idType));
  }
}
