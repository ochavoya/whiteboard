import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhiteboardComponent } from './components/whiteboard/whiteboard.component';
import { WhiteboardColumnComponent } from './components/whiteboard-column/whiteboard-column.component';
import { WhiteboardSectionComponent } from './components/whiteboard-section/whiteboard-section.component';
import { WhiteboardItemComponent } from './components/whiteboard-item/whiteboard-item.component';
import { RestClientService } from './services/rest-client.service'
import { DataService } from './services/data.service';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    WhiteboardColumnComponent,
    WhiteboardSectionComponent,
    WhiteboardItemComponent,
    ItemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [RestClientService, DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
