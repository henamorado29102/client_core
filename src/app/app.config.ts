import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
   // {provide: BACKEND_URL, useValue: 'https://photoapp.looknongmodules.com/api'},
    provideRouter(
      routes, 
      withViewTransitions({skipInitialTransition: true}),
      withComponentInputBinding()
    ),
    importProvidersFrom(
      HttpClientModule, FormsModule, ReactiveFormsModule
    )
  ],
    

};
