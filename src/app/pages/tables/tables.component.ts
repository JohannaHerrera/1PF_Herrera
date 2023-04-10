import { Component } from '@angular/core';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { DeleteAlumnosComponent } from './delete-alumnos/delete-alumnos.component';
import { EditAlumnosComponent } from './edit-alumnos/edit-alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface Alumno{
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  grade: number;
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {  
  displayedColumns: string[] = ['id', 'fullName', 'age', 'grade', 'edit', 'delete'];
  alumnos: Alumno[] = [
    {
      id: 1,
      firstName: 'Pedro',
      lastName: 'Cáceres',
      age: 15,
      grade: 9
    },
    {
      id: 2,
      firstName: 'Katherine',
      lastName: 'Balladares',
      age: 14,
      grade: 10
    },
    {
      id: 3,
      firstName: 'Alejandro',
      lastName: 'Navarro',
      age: 15,
      grade: 10
    },
    {
      id: 4,
      firstName: 'Liliana',
      lastName: 'Fernández',
      age: 15,
      grade: 8
    },
    {
      id: 5,
      firstName: 'Michael',
      lastName: 'Hidalgo',
      age: 16,
      grade: 7
    }    
  ];

  dataSource = new MatTableDataSource(this.alumnos);  

  constructor(private matDialog: MatDialog){}

  createAlumno(): void{
    const dialog = this.matDialog.open(AbmAlumnosComponent);
    dialog.afterClosed().subscribe((value) => {
      if(value){
        this.dataSource.data = [...this.dataSource.data, {
          ...value,
          id: this.dataSource.data[this.dataSource.data.length-1].id + 1
        }];
      }
    });
  }

  edit(alumno: Alumno): void{
    const dialog = this.matDialog.open(EditAlumnosComponent, {
      data: {
        alumno
      }
    });
    dialog.afterClosed().subscribe((value) => {
      if(value){
        let index = this.dataSource.data.findIndex(item => item.id === alumno.id);
        this.dataSource.data[index] = value;
        this.dataSource.data = this.dataSource.data;
      }
    });
  }

  delete(id: number): void{
    const dialog = this.matDialog.open(DeleteAlumnosComponent);
    dialog.afterClosed().subscribe((value) => {
      if(value){
        this.dataSource.data = this.dataSource.data.filter((alumno) => {
          return alumno.id !== id;});
      }
    });
  }
}
