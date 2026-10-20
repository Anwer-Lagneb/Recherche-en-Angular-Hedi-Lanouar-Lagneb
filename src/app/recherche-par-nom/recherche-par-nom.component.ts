import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComposantPc } from '../model/composant-pc.model';
import { ComposantPcService } from '../services/composant-pc.service';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {
  allComposantsPc: ComposantPc[] = [];
  composantsPc: ComposantPc[] = [];
  searchTerm = '';

  constructor(private composantPcService: ComposantPcService) {}

  ngOnInit(): void {
    this.allComposantsPc = this.composantPcService.listeComposantsPc();
  }

  onKeyUp(filterText: string): void {
    const recherche = filterText.trim().toLocaleLowerCase();
    if (!recherche) {
      this.composantsPc = [];
      return;
    }
    this.composantsPc = this.allComposantsPc.filter(composant =>
      (composant.nomComposantPc ?? '').toLocaleLowerCase().includes(recherche)
    );
  }
}
