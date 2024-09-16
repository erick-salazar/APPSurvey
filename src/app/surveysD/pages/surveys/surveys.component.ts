import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-surveys',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterModule
  ],
  templateUrl: './surveys.component.html',
  styleUrl: './surveys.component.css'
})
export default class SurveysComponent {

}
