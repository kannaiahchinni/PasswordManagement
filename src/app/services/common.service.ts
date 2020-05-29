import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public links: any = [];
  private applications: any[] = [];
  private documents: any[] = [];
  private url: String = environment.url;
  private version: String = environment.version;

  constructor(@Inject(APP_BASE_HREF) private baseHref: String , private httpClient:  HttpClient) { 
  }

  getLinks(): any {
    return this.httpClient.request('GET', `${this.baseHref}assets/links.json`, {});
  }
  setLinks(links: any): void {
    this.links = links;
  }
  getCachedLinks(): any {
    return this.links;
  }

  getApplications(): any {
    return this.httpClient.request('GET', `${this.baseHref}assets/applications.json`, {});
  }
  setApplications(apps: any): void {
    this.applications = apps;
  }
  getCachedApplications(): any[] {
    return this.applications;
  }
  getDocs(): any {
    return this.httpClient.request('GET', `${this.baseHref}assets/library.json`, {});
  }
  setDocs(docs: any): void {
    this.documents = docs;
  }
  getCachedDocs(): any[] {
    return this.documents;
  }

  execute(type, password, env): any {
    const requestUrl = `${this.url}/${type}/${this.version}`;
    const data = { 'env': env , 'password': password };
    return this.httpClient.request('POST', requestUrl, {body: data});

  }


}
