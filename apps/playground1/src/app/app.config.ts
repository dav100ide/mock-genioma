import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset, palette } from '@primeng/themes';

//* buildable-ui-lib -- playground-theme-preset.ts
const playgroundThemePreset = definePreset(Aura, {
  semantic: {
    primary: palette('#242037'), //50-900
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),

    providePrimeNG({
      theme: {
        preset: playgroundThemePreset,
        options: {
          darkModeSelector: false,
        },
      },
    }),
  ],
};
