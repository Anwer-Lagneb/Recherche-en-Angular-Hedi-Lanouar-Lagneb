import { Injectable } from '@angular/core';
import { ComposantPc } from '../model/composant-pc.model';
import { TypeComposant } from '../model/type-composant.model';

@Injectable({
  providedIn: 'root'
})
export class ComposantPcService {
  composantsPc : ComposantPc[];
  typesComposant : TypeComposant[];
  composantPc! : ComposantPc;

  constructor() {
    this.typesComposant = [
      { idType: 1, nomType: 'Processeur' },
      { idType: 2, nomType: 'Carte graphique' },
      { idType: 3, nomType: 'Mémoire vive' }
    ];
    this.composantsPc = [
      { idComposantPc : 1, nomComposantPc : "Processeur Core i5", marqueComposantPc : "Intel", prixComposantPc : 180, dateAchat : new Date("2024-01-14"), typeComposant: this.typesComposant[0] },
      { idComposantPc : 2, nomComposantPc : "Carte graphique RTX 4060", marqueComposantPc : "NVIDIA", prixComposantPc : 320, dateAchat : new Date("2024-03-17"), typeComposant: this.typesComposant[1] },
      { idComposantPc : 3, nomComposantPc : "Mémoire vive 16 Go", marqueComposantPc : "Kingston", prixComposantPc : 55, dateAchat : new Date("2024-06-20"), typeComposant: this.typesComposant[2] }
    ];
  }

  listeTypesComposant(): TypeComposant[] {
    return this.typesComposant;
  }

  consulterTypeComposant(id: number): TypeComposant {
    return this.typesComposant.find(type => type.idType === id)!;
  }

  listeComposantsPc(): ComposantPc[] {
    return this.composantsPc;
  }

  rechercherParType(idType: number): ComposantPc[] {
    return this.composantsPc.filter(composant => composant.typeComposant?.idType === idType);
  }

  ajouterComposantPc(composantPc: ComposantPc) {
    this.composantsPc.push(composantPc);
  }

  supprimerComposantPc(composantPc: ComposantPc) {
    const index = this.composantsPc.indexOf(composantPc, 0);
    if (index > -1) {
      this.composantsPc.splice(index, 1);
    }
  }

  consulterComposantPc(id: number): ComposantPc {
    this.composantPc = this.composantsPc.find(c => c.idComposantPc == id)!;
    return this.composantPc;
  }

  trierComposantsPc() {
    this.composantsPc = this.composantsPc.sort((c1, c2) => {
      if (c1.idComposantPc! > c2.idComposantPc!) {
        return 1;
      }
      if (c1.idComposantPc! < c2.idComposantPc!) {
        return -1;
      }
      return 0;
    });
  }

  updateComposantPc(composantPc: ComposantPc) {
    this.supprimerComposantPc(composantPc);
    this.ajouterComposantPc(composantPc);
    this.trierComposantsPc();
  }
}
