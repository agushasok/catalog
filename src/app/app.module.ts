import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RootModule, UIRouterModule, Transition} from '@uirouter/angular';
import {HomeComponent} from './home/home.component';
import {MatGridListModule, MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {BookComponent} from './book/book.component';
import {HomeService} from './home.service';
import { NotFoundComponent } from './not-found/not-found.component';


const rootModule: RootModule = {
  states: [
    {
      name: 'catalog',
      url: '/',
      component: HomeComponent,
      resolve: [
        {
          token: 'books',
          deps: [HomeService],
          resolveFn: (homeService: HomeService) => homeService.getCatalog().toPromise(),
        }]
    },
      {
        name: 'book',
        url: '/books/:bookId',
        component: BookComponent,
        resolve: [
          {
            token: 'book',
            deps: [Transition, HomeService],
            resolveFn: (trans: Transition, homeService: HomeService) => homeService.getBook(trans.params().bookId).toPromise(),
          },
          {
            token: 'bundles',
            deps: [Transition, HomeService],
            resolveFn: (trans: Transition, homeService: HomeService) => homeService.getBundles(trans.params().bookId).toPromise(),
          }]
      },
      {
        name: 'notFound',
        url: '/err',
        component: NotFoundComponent
      }],
  useHash: false,
  otherwise: '/err'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    UIRouterModule.forRoot(rootModule)
  ],
  exports: [MatGridListModule, MatListModule, MatButtonModule, UIRouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
