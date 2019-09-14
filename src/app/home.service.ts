import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StateService} from '@uirouter/angular';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private state: StateService) {
  }

  getCatalog() {
    return this.http.get('https://ds.aggregion.com/api/public/catalog')
      .pipe(
        catchError(() => {
          return this.state.go('notFound');
        })
      );
  }

  getBook(id: string) {
    return this.http.get('https://ds.aggregion.com/api/public/catalog/' + id)
      .pipe(
        catchError(() => {
          return this.state.go('notFound');
        })
      );
  }

  getBundles(id: string) {
    return this.http.get('https://ds.aggregion.com/api/public/catalog/' + id + '/bundles')
      .pipe(
        catchError(() => {
          return this.state.go('notFound');
        })
      );
  }
}
