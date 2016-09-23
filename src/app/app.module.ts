import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TimepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ButtonComponent } from './button/button.component';
import { PopupComponent } from './popup/popup.component';
import { ModalButtonComponent } from './modal-button/modal-button.component';
import { TimetableComponent } from './timetable/timetable.component';
import { Day } from './day.directive';
import { TimeslotOverlayComponent } from './timeslot-overlay/timeslot-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PopupComponent,
    ModalButtonComponent,
    TimetableComponent,
    Day,
    TimeslotOverlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule,
    ModalModule,
    DropdownModule,
    TimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
