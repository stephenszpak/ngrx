import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { StateModule } from './state/state.module';
import { CoreModule } from './core/core.module';

import {
  MatButtonModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: '**', component: NotFoundComponent },
];

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/containers/not-found/not-found.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StateModule.forRoot(),
    CoreModule.forRoot(),
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
