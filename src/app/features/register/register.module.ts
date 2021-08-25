import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: RegisterComponent }
    ])
  ]
})
export class RegisterModule { }
