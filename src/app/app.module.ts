import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule} from "@ionic/storage-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { provideFirebaseApp, initializeApp} from '@angular/fire/app';
import { environment} from '../environments/environment';
import { getAuth, provideAuth} from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  entryComponents:[],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), provideAuth(() => getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
