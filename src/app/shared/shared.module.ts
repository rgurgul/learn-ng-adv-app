import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveDirective } from './directives/active.directive';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SpinnerComponent } from "../shared/components/spinner/spinner.component";
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ActiveDirective, SpinnerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [ActiveDirective, SpinnerComponent]
})
export class SharedModule { }
