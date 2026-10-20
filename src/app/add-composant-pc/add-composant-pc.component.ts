import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComposantPc } from '../model/composant-pc.model';
import { ComposantPcService } from '../services/composant-pc.service';
import { TypeComposant } from '../model/type-composant.model';

@Component({
  selector: 'app-add-composant-pc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-composant-pc.component.html',
  styleUrl: './add-composant-pc.component.css'
})
export class AddComposantPcComponent implements OnInit {

  newComposantPc = new ComposantPc();

  message! : string;
  typesComposant: TypeComposant[] = [];
  newIdType = 1;

  constructor(private composantPcService: ComposantPcService ) {}

  ngOnInit(): void {
    this.typesComposant = this.composantPcService.listeTypesComposant();
  }

  addComposantPc(){
   this.newComposantPc.typeComposant = this.composantPcService.consulterTypeComposant(Number(this.newIdType));
   // console.log(this.newComposantPc);
   this.composantPcService.ajouterComposantPc(this.newComposantPc);
   this.message = "Composant PC "+this.newComposantPc.nomComposantPc +" ajouté avec succès !"
  }


}
