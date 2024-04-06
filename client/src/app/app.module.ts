import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule} from '@angular/common/http'
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
