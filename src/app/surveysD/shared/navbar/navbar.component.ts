import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SurveysService } from '../../services/surveys.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild('fullscreen-button') fullscreenButton!: ElementRef;
  public isDropdownOpen = false;

  private surveysService = inject(SurveysService);

  public user = computed(() => this.surveysService.currentUser() );

  toggleFullscreen(): void {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  Logout(){
    this.surveysService.Logout();
  }

  toggleSidebar(){
    return;
  }

}
