import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { LoginResponse } from '../interfaces/login-response.interface';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { SurveyResponse } from '../interfaces/suervey-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {

  private readonly BASE_URL = 'http://localhost:3000/api';
  private http = inject(HttpClient);

  private _currentUser = signal<LoginResponse | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor(
  ) {
    this.refeshToken().subscribe();
  }

  login(userId: string, password: string): Observable<boolean> {

    const url = `${this.BASE_URL}/auth/login`;
    const body = { userId, password };

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map((resp) => this.setTokenUser(resp)),
        catchError(erro => throwError(() => erro.error.message))
      );
  }

  private getTokenInfo() {
    return localStorage.getItem('token');
  }

  private setHeaderInfo(token: string) {
    return new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
  }

  refeshToken(): Observable<boolean> {

    const url = `${this.BASE_URL}/auth/refreshtoken`;
    const token = this.getTokenInfo();
    if (!token) { return of(false); }
    const headers = this.setHeaderInfo(token);

    return this.http.get<LoginResponse>(url, { headers })
      .pipe(
        map((resp) => this.setTokenUser(resp)),
        catchError(() => {
          this._authStatus.set(AuthStatus.notAuthenticated);
          return of(false);
        })
      );
  }

  private setTokenUser(loginResponse: LoginResponse): boolean {
    this._currentUser.set(loginResponse);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', loginResponse.token);
    return true;
  }

  Logout() {
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
    localStorage.removeItem('token');
  }


  surveyList() : Observable<SurveyResponse[] | false> {

    const url = `${this.BASE_URL}/surveys`;
    const token = this.getTokenInfo();
    if (!token) { return of(false); }
    const headers = this.setHeaderInfo(token);

    return this.http.get<SurveyResponse[]>(url, { headers })
      .pipe(
        map((resp) => (resp)),
        catchError(erro => throwError(() => erro.error.message))
      );


  }

}
