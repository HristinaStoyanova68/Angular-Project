import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule} from '@angular/common/http'
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
