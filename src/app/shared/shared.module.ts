import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

import { NotFoundComponent } from './containers/not-found/not-found.component';
import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';
import { LayoutComponent } from './components/layout/layout.component';

const components = [
  DialogHeaderComponent,
  LayoutComponent,
  NotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class SharedModule { }
