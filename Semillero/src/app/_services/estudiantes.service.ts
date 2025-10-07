import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private baseUrl = 'http://localhost:8081/servicesRest/WsEstudiante';

  constructor(private http: HttpClient) {}

  getPromedios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/promedios`);
  }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ConsultarTodos`);
  }
  
}
