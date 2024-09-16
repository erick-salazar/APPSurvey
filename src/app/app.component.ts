import { Component, computed, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SurveysService } from './surveysD/services/surveys.service';
import { AuthStatus } from './surveysD/interfaces/auth-status.enum';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Surveys';

  private surveysService = inject(SurveysService);
  private route = inject(Router);

  public validarAuth = computed<boolean>(()=>{

    if(this.surveysService.authStatus()=== AuthStatus.checking){return false}

    return true;

  });

  public authStatusChanged = effect(()=>{

    switch(this.surveysService.authStatus()){
      case AuthStatus.checking:
        return;
      case AuthStatus.authenticated:
        this.route.navigateByUrl('/surveys/welcome');
        break;
      case AuthStatus.notAuthenticated:
        this.route.navigateByUrl('/login');
        break;
    }

  });

  ngOnInit(): void {
    initFlowbite();
  }

}
