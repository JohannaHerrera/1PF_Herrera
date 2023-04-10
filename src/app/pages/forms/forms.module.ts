import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';



@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ]
})
export class FormsModule { }
