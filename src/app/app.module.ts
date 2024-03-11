import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './core/component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { MenuComponent } from './core/component/menu/menu.component';
import { AdminMenuComponent } from './core/component/admin-menu/admin-menu.component';
import { APP_CONFIG } from './app.config';
import { environment } from '../environments/environment';
import { urlInterceptor } from './core/interceptor/url.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([urlInterceptor])),
    {
      provide: APP_CONFIG,
      useValue: environment,
    },
    { provide: LOCALE_ID, useValue: 'tr'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
