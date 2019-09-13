import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getCatalog() {
    return this.http.get('https://ds.aggregion.com/api/public/catalog');
  }

  getBook(id: string) {
    return this.http.get('https://ds.aggregion.com/api/public/catalog/' + id);
  }

  getBundles(id: string) {
    return this.http.get('https://ds.aggregion.com/api/public/catalog/' + id + '/bundles');
  }
}
