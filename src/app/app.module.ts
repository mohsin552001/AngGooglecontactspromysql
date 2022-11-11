import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './components/create/create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReadComponent } from './components/read/read.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe';
import { SaveComponent } from './components/save/save.component';
@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    CreateComponent,
    ReadComponent,
    FilterPipe,
    SaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatCheckboxModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
