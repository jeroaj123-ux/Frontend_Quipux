import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../../_services/estudiantes.service';

@Component({
  selector: 'app-admin-estudiantes',
  templateUrl: './admin-estudiantes.component.html',
  styleUrls: ['./admin-estudiantes.component.css']
})
export class AdminEstudiantesComponent implements OnInit {
  promedios: any[] = [];
  loading = false;

  constructor(private estudiantesService: EstudiantesService) {}

  ngOnInit(): void {
    this.cargarPromedios();
  }

  cargarPromedios(): void {
    this.loading = true;
    this.estudiantesService.getPromedios().subscribe({
      next: (data) => {
        this.promedios = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(' Error al cargar promedios:', err);
        this.loading = false;
      }
    });
  }
}


