import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book;
  @Input() bundles;

  constructor(private state: StateService) { }

  ngOnInit() {
  }

}
