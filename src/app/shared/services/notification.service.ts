import { SharedModule } from './../shared.module';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export type MessageTypes = 'info' | 'error' | 'success' | 'warning';

@Injectable({ providedIn: SharedModule })
export class NotificationService {

    constructor(private snackBar: MatSnackBar) { }

    showInfo(message: string) {
        this.show(message, 'info');
    }

    showError(message: string) {
        this.show(message, 'error');
    }

    showWarning(message: string) {
        this.show(message, 'warning');
    }

    showSuccess(message: string) {
        this.show(message, 'success');
    }

    private show(message: string = 'unknown error', type: MessageTypes) {
        const config = new MatSnackBarConfig();
        config.panelClass = ['notification', type];
        config.duration = 5000;
        config.horizontalPosition = 'right';
        config.verticalPosition = 'top';
        this.snackBar.open(message, 'close', config);
    }
}
