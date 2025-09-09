import { Component } from '@angular/core';

@Component({
  selector: 'app-admissions',
  standalone: true,
  template: `<section class="page"><h2>Admissions</h2><p>Application details and requirements.</p></section>`,
  styles: [`.page{padding:1rem;max-width:1000px;margin:0 auto;}`]
})
export class AdmissionsComponent {}