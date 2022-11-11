import { Component, EventEmitter, OnInit } from '@angular/core';
import { FirstserviceService } from 'src/app/services/firstservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public firstService: FirstserviceService) {}

  ngOnInit(): void {}

  entersearchValue: any = '';

  searchTextChanged: EventEmitter<any> = new EventEmitter<any>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.entersearchValue);
  }
}
