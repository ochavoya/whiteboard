import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhiteboardComponent } from './components/whiteboard/whiteboard.component';
import { WhiteboardColumnComponent } from './components/whiteboard-column/whiteboard-column.component';
import { WhiteboardSectionComponent } from './components/whiteboard-section/whiteboard-section.component';
import { WhiteboardItemComponent } from './components/whiteboard-item/whiteboard-item.component';
import { RestClientService } from './services/rest-client.service';
import { DataService } from './services/data.service';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthenticationService } from './services/authentication.service';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { DeepStateGopherService } from './deep-state-gopher.service';


@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    WhiteboardColumnComponent,
    WhiteboardSectionComponent,
    WhiteboardItemComponent,
    ItemFormComponent,
    LoginFormComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    RestClientService,
    DataService,
    AuthenticationService,
    HttpClient,
    DeepStateGopherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
