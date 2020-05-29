import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecryptionComponent } from './components/decryption/decryption.component';
import { AboutComponent } from './components/about/about.component';
import { EncryptionComponent } from './components/encryption/encryption.component';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { ApplicationComponent } from './components/application/application.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'decryption',
    component: DecryptionComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'encryption',
    component: EncryptionComponent
  },
  {
    path: 'library',
    component: LibraryComponent
  },
  {
    path: 'application',
    component: ApplicationComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
