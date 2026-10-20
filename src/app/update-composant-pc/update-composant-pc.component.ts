import { Component, OnInit } from '@angular/core';
import { ComposantPc } from '../model/composant-pc.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ComposantPcService } from '../services/composant-pc.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TypeComposant } from '../model/type-composant.model';

@Component({
  selector: 'app-update-composant-pc',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-composant-pc.component.html',
  styles: ``
})
export class UpdateComposantPcComponent implements OnInit {
  currentComposantPc  = new ComposantPc();
  typesComposant: TypeComposant[] = [];
  updatedTypeId = 1;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private composantPcService: ComposantPcService
) { }

  ngOnInit() {
    this.typesComposant = this.composantPcService.listeTypesComposant();
  // console.log(this.route.snapshot.params.id);
this.currentComposantPc = this.composantPcService.consulterComposantPc(this.activatedRoute.snapshot. params['id']);
    this.updatedTypeId = this.currentComposantPc.typeComposant?.idType ?? this.typesComposant[0]?.idType ?? 1;
   console.log(this.currentComposantPc);     
  }


  updateComposantPc()
  { //console.log(this.currentComposantPc);
    this.currentComposantPc.typeComposant = this.composantPcService.consulterTypeComposant(Number(this.updatedTypeId));
    this.composantPcService.updateComposantPc(this.currentComposantPc);
    this.router.navigate(['composants-pc']);
  }

}
