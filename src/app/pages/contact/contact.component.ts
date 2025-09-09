import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `<section class="page"><h2>Contact</h2><p>Get in touch with us.</p></section>`,
  styles: [`.page{padding:1rem;max-width:1000px;margin:0 auto;}`]
})
export class ContactComponent {}