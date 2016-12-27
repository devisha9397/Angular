import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from './app.routing';
import { AppComponent } from './app.component';
import { BooktabledataService } from './shared/booktabledata.service';
import { BooktableComponent } from './booktable/booktable.component';
import { AddbooktableComponent } from './booktable/addbooktable.component';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    AppComponent,
    BooktableComponent,
    AddbooktableComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Router
  ],
  providers: [BooktabledataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
