import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `<section class="page"><h2>About</h2><p>About the School of Hospitality and Tourism.</p></section>`,
  styles: [`.page{padding:1rem;max-width:1000px;margin:0 auto;}`]
})
export class AboutComponent {}