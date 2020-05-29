import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './modules/header/header.module';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AppComponent } from './app.component';
import { BannerModule } from './modules/banner/banner.module';
import { DecryptionComponent } from './components/decryption/decryption.component';
import { AboutComponent } from './components/about/about.component';
import { EncryptionComponent } from './components/encryption/encryption.component';
import { HomeComponent } from './components/home/home.component';
import { OptionComponent } from './components/option/option.component';
import { LibraryComponent } from './components/library/library.component';
import { ApplicationComponent } from './components/application/application.component';
import { PlatformLocation, APP_BASE_HREF } from '@angular/common';


export function getBaseHref(platformLocation: PlatformLocation): String {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  declarations: [
    AppComponent,
    DecryptionComponent,
    AboutComponent,
    EncryptionComponent,
    HomeComponent,
    OptionComponent,
    LibraryComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BannerModule,
    HttpClientModule,
    FileUploadModule,
    FormsModule,
    NgxJsonViewerModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHref,
      deps: [PlatformLocation]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
