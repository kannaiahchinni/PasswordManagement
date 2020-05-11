import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './modules/header/header.module';
import { AppComponent } from './app.component';
import { BannerModule } from './modules/banner/banner.module';
import { DecryptionComponent } from './components/decryption/decryption.component';
import { AboutComponent } from './components/about/about.component';
import { EncryptionComponent } from './components/encryption/encryption.component';
import { HomeComponent } from './components/home/home.component';
import { OptionComponent } from './components/option/option.component';


@NgModule({
  declarations: [
    AppComponent,
    DecryptionComponent,
    AboutComponent,
    EncryptionComponent,
    HomeComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
