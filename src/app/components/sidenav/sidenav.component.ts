import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="app-container" [class.expanded]="isExpanded">
      <nav class="sidebar">
        <div class="sidebar-header">
          <button class="toggle-btn" (click)="toggleSidebar()">
            {{ isExpanded ? '←' : '→' }}
          </button>
        </div>
        <ul class="nav-links">
          <li>
            <a routerLink="/inicio" routerLinkActive="active">
              <span class="icon">🏠</span>
              <span class="text" *ngIf="isExpanded">Inicio</span>
            </a>
          </li>
          <li>
            <a routerLink="/dashboard" routerLinkActive="active">
              <span class="icon">📊</span>
              <span class="text" *ngIf="isExpanded">Dashboard</span>
            </a>
          </li>
          <li>
            <a routerLink="/users" routerLinkActive="active">
              <span class="icon">👥</span>
              <span class="text" *ngIf="isExpanded">Usuarios</span>
            </a>
          </li>
          <li>
            <a routerLink="/resources" routerLinkActive="active">
              <span class="icon">📦</span>
              <span class="text" *ngIf="isExpanded">Recursos</span>
            </a>
          </li>
          <li>
            <a routerLink="/categories" routerLinkActive="active">
              <span class="icon">📑</span>
              <span class="text" *ngIf="isExpanded">Categorías</span>
            </a>
          </li>
        </ul>
      </nav>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      height: 100vh;
    }

    .sidebar {
      background: #2c3e50;
      color: white;
      width: 60px;
      transition: width 0.3s ease;
    }

    .expanded .sidebar {
      width: 200px;
    }

    .sidebar-header {
      padding: 1rem;
      display: flex;
      justify-content: flex-end;
    }

    .toggle-btn {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      padding: 0.5rem;
    }

    .nav-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-links li a {
      display: flex;
      align-items: center;
      padding: 1rem;
      color: white;
      text-decoration: none;
      transition: background-color 0.3s;
    }

    .nav-links li a:hover {
      background-color: #34495e;
    }

    .nav-links .icon {
      margin-right: 1rem;
    }

    .active {
      background-color: #34495e;
    }

    .content {
      flex: 1;
      padding: 2rem;
      background: #f5f6fa;
    }
  `]
})
export class SidenavComponent {
  isExpanded = false;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}