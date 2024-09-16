import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SurveysService } from '../../services/surveys.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './welcome.component.html',
})
export default class WelcomeComponent {

  private surveysService  = inject(SurveysService);

  public user = computed(()=>this.surveysService.currentUser());


}
