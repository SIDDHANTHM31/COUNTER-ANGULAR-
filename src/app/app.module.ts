import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetComponent } from './set/set.component';
import { AddCounterComponent } from './add-counter/add-counter.component';
import { RemoveCounterComponent } from './remove-counter/remove-counter.component';
import { ResetCounterComponent } from './reset-counter/reset-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    SetComponent,
    AddCounterComponent,
    RemoveCounterComponent,
    ResetCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
