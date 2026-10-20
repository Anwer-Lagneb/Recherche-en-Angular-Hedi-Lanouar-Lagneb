import { Pipe, PipeTransform } from '@angular/core';
import { ComposantPc } from './model/composant-pc.model';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {
  transform(composants: ComposantPc[] | null | undefined, filterText: string): ComposantPc[] {
    const recherche = (filterText ?? '').trim().toLocaleLowerCase();
    if (!composants) return [];
    if (!recherche) return composants;

    return composants.filter(composant =>
      (composant.nomComposantPc ?? '').toLocaleLowerCase().includes(recherche)
    );
  }
}
