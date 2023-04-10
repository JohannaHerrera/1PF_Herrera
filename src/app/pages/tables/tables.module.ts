import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteAlumnosComponent } from './delete-alumnos/delete-alumnos.component';
import { EditAlumnosComponent } from './edit-alumnos/edit-alumnos.component';

@NgModule({
  declarations: [
    TablesComponent,
    AbmAlumnosComponent,
    DeleteAlumnosComponent,
    EditAlumnosComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    TablesComponent
  ]
})
export class TablesModule { }
