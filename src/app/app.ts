import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('schotozim');
  protected readonly currentYear = new Date().getFullYear();
  isNavOpen = signal(false);
  toggleNav() { this.isNavOpen.set(!this.isNavOpen()); }
  closeNav() { this.isNavOpen.set(false); }
}
