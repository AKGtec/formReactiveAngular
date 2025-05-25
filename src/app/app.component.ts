import { Component } from '@angular/core';
import { ProduitFormComponent } from './produit-form/produit-form.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ProduitFormComponent],
  template: `<app-produit-form></app-produit-form>`
})
export class AppComponent {
  title = 'ReactiveForms';
}
