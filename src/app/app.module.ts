import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { ProgressBarComponent } from './partials/progress-bar/progress-bar.component';
import { DetailsComponent } from './partials/details/details.component';
import { HeaderComponent } from './partials/header/header.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PageOneComponent,
        PageTwoComponent,
        ProgressBarComponent,
        DetailsComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
