import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './services/weather.service';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent,
    pathMatch: 'full'
  }
  , {
    path: 'weather/forecast/:name',
    component: WeatherComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent, WeatherComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
