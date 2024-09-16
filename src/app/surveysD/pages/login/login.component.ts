import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SurveysService } from '../../services/surveys.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html'
})
export default class LoginComponent {

  private fb = inject(FormBuilder);
  private surveysService = inject(SurveysService);
  private router = inject(Router);

  @ViewChild('password') password: ElementRef | undefined;;

  public myForm: FormGroup = this.fb.group({
    userId:['',[Validators.required,Validators.minLength(6)]],
    password:['',[Validators.required, Validators.minLength(6)]]
  });

  login(){
    const {userId, password} = this.myForm.value;
    this.surveysService.login(userId,password)
    .subscribe({
      next:()=>this.router.navigateByUrl('/surveys/welcome'),
      error:(message)=>{
        Swal.fire('Error',message,'error');
      }
    })
  }



  togglePassword(): void {
    console.log(this.password);
    if(this.password){
      const input = this.password.nativeElement as HTMLInputElement;
      const type = input.type === 'password' ? 'text' : 'password';
      input.type = type;
    }
  }

}
