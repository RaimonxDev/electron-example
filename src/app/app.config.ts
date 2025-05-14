import { provideHttpClient, withInterceptorsFromDi, withFetch } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { appRoutes } from "./app.routes";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
  ],
};
