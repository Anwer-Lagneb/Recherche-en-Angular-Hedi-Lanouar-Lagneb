import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ComposantPc } from '../model/composant-pc.model';
import { ComposantPcService } from '../services/composant-pc.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-composants-pc',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './composants-pc.component.html',
  styleUrl: './composants-pc.component.css'
})
export class ComposantsPcComponent implements OnInit {
  composantsPc: ComposantPc[];

  constructor(private composantPcService: ComposantPcService) {
    this.composantsPc = composantPcService.listeComposantsPc();
  }

  ngOnInit() {}

  supprimerComposantPc(composantPc: ComposantPc) {
    const conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.composantPcService.supprimerComposantPc(composantPc);
    }
  }
}
