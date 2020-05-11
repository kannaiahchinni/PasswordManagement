import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public links: any = [];

  constructor(private httpClient:  HttpClient) { }

  getLinks(): any {
    return this.httpClient.request('GET', '/assets/links.json', {});
  }
  setLinks(links: any): void {
    this.links = links;
  }
  getCachedLinks(): any {
    return this.links;
  }

}
