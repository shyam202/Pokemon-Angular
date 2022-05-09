import { DatabaseComponent } from './components/database/database.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './Pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { InterDetailsComponent } from './components/inter-details/inter-details.component';

@NgModule({
  declarations: [
    DatabaseComponent,
    HeaderComponent,
    AppComponent,
    FilterPipe,
    InterDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
