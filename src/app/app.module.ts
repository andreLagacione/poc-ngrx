import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ScoreboardPageComponent } from './scoreboard-page/scoreboard-page.component';
import { StoreModule } from '@ngrx/store';
import { scoreboardReducer } from './scoreboard-page/reducers/scoreboard.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScoreboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ game: scoreboardReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
