import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    WhiteboardColumnComponent,
    WhiteboardSectionComponent,
    WhiteboardItemComponent,
    ItemFormComponent,
    HomePageComponent,
    LoginFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [RestClientService, DataService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
