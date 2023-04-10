import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent {
  firstNameControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
  lastNameControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
  ageControl = new FormControl('', [Validators.required, Validators.min(1)]);
  gradeControl = new FormControl('', [Validators.required, Validators.max(10)]);

  registerForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    age: this.ageControl,
    grade: this.gradeControl
  });

  constructor(private matDialogRef: MatDialogRef<AbmAlumnosComponent>){
  }

  save(): void{
    if(this.registerForm.valid){
      this.matDialogRef.close(this.registerForm.value);
    }
    else{
      this.registerForm.markAllAsTouched();
    }
  }
}
