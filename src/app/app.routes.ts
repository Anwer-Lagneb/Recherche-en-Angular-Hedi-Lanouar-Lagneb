import { Routes } from '@angular/router';
import { ComposantsPcComponent } from './composants-pc/composants-pc.component';
import { AddComposantPcComponent } from './add-composant-pc/add-composant-pc.component';
import { UpdateComposantPcComponent } from './update-composant-pc/update-composant-pc.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

export const routes: Routes = [
    {path: "composants-pc", component : ComposantsPcComponent},
    {path: "add-composant-pc", component : AddComposantPcComponent},
    {path: "updateComposantPc/:id",  component: UpdateComposantPcComponent},
    {path: "rechercheParType", component: RechercheParTypeComponent},
    {path: "rechercheParNom", component: RechercheParNomComponent},
    {path: "", redirectTo: "composants-pc", pathMatch: "full"}
];
