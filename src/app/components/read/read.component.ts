import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FirstserviceService } from 'src/app/services/firstservice.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  constructor(
    private api: FirstserviceService,
    private route: ActivatedRoute
  ) {}

  readUsers: any[] = [];
  ngOnInit(): void {
    this.api.getAlluser().subscribe((res) => {
      console.log(res, 'res is right now');

      this.readUsers = res;
    });
  }

  filteredUsers() {
    if (!this.api.headerSearchString) return this.readUsers;

    return this.readUsers.filter((user) =>
      user.Name.toLowerCase().includes(
        this.api.headerSearchString.toLowerCase()
      )
    );
  }

  DeleteId(id: any) {
    this.api.deleteUser(id).subscribe((res) => {
      this.api.getAlluser().subscribe((res) => {
        console.log(res, 'this id has been ');

        this.readUsers = res;
      });
    });
  }
  updateUser() {
    throw new Error('Method not implemented.');
  }
}
