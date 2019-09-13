import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private defaultImgUrl = 'https://storage.aggregion.com/api/files/12ce171be47031a58f6d12ddefca93d52bda709b1b720d50cf48747d6cd44cb6/shared/data';
  booksCatalog;
  @Input() books;

  constructor() {
  }

  ngOnInit() {
    this.booksCatalog = this.books.map(item => {
      const img = 'https://storage.aggregion.com/api/files/' + item.cover + '/shared/data';
      return {
        id: item.id,
        coverUrl: img,
        title: item.title.default,
      };
    });
  }

  errImg(event) {
    event.target.src = this.defaultImgUrl;
  }
}
