Este proyecto corresponde al Frontend del sistema escolar conectado al backend del repositorio Backend_Spring


Su propósito es permitir la visualización de los estudiantes junto con el promedio de sus materias, integrando la información proveniente de la base de datos del backend.

Descripción del Proyecto

El Frontend está desarrollado en Angular y se conecta directamente con los servicios REST del backend.
Entre sus principales funcionalidades se incluye:

Listado de estudiantes registrados.

Visualización de las materias asociadas a cada estudiante.

Cálculo y visualización del promedio general de cada estudiante.

Integración completa con el backend mediante HttpClient.

Para consultar o modificar la funcionalidad del promedio, puedes dirigirte a los siguientes archivos (En estos archivos se encuentra lo que agregue):

Semillero/
├── src/

│   ├── app/

│   │   ├── components/

│   │   │   └── admin-estudiantes/

│   │   │       ├── admin-estudiantes.component.ts

│   │   │       ├── admin-estudiantes.component.html

│   │   │       └── admin-estudiantes.component.css

│   │   └── _services/

│   │       └── estudiantes.service.ts



Tecnologías Utilizadas

Angular (Frontend principal)

TypeScript

HTML / CSS / Bootstrap

Spring Boot (Backend vinculado)

MySQL (Base de datos)


Notas Importantes

Este proyecto es parte del trabajo académico de integración entre Frontend (Angular) y Backend (Spring).

El módulo de promedios está implementado dentro del componente AdminEstudiantes.
