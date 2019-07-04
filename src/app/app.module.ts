import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeroesModule} from './heroes/heroes.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        CrisisListComponent,
        PageNotFoundComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HeroesModule,
        FormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
