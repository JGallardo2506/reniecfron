import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SidenavComponent],
  template: `
    <app-sidenav></app-sidenav>
  `,
  styles: []
})
export class AppComponent {}