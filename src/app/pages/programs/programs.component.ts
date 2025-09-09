import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  standalone: true,
  template: `<section class="page"><h2>Programs</h2><p>Explore our hospitality and tourism programs.</p></section>`,
  styles: [`.page{padding:1rem;max-width:1000px;margin:0 auto;}`]
})
export class ProgramsComponent {}