import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ValidDirective } from '../directives/valid.directive';
import { BlankComponent } from '../components/blank/blank.component';
import { TableComponent } from '../components/table/table.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ValidDirective,
    BlankComponent,
    TableComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ValidDirective,
    BlankComponent,
    TableComponent
  ]
})
export class SharedModule { }
