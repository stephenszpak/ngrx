import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { StateModule } from './state/state.module';
import { CoreModule } from './core/core.module';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'search', component: MapsComponent },
  { path: '**', component: NotFoundComponent },
];

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/containers/not-found/not-found.component';
import { IndexComponent } from './index/index.component';
import { MapsComponent } from './maps/maps.component';
import { PanelComponent } from './maps/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MapsComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StateModule.forRoot(),
    CoreModule.forRoot(),
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTYUC9Vs2Luy8azl5p9qcgnWf2XlVuiRM',
      libraries: ['places']
    }),
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.circleSwish,
      primaryColour: '#03A9F4',
      secondaryColour: '#03A9F4',
      tertiaryColour: '#03A9F4'
    }),
    SlimLoadingBarModule.forRoot(),

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
