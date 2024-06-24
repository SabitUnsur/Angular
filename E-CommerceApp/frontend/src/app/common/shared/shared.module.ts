import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ValidDirective } from '../directives/valid.directive';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ValidDirective
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ValidDirective
  ]
})
export class SharedModule { }
