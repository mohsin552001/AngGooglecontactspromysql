import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstserviceService } from 'src/app/services/firstservice.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss'],
})
export class SaveComponent implements OnInit {
  readUsers: any[] = [];
  save: any;

  saveId: any;

  hidedetail: any = true;
  constructor(
    private activatedroute: ActivatedRoute,
    private service: FirstserviceService
  ) {}

  ngOnInit(): void {
    this.service.getAlluser().subscribe((res) => {
      this.readUsers = res;
      this.saveId = this.activatedroute.snapshot.paramMap.get('id');
      console.log('khills ');
      this.save = this.readUsers.find((x) => x.id == this.saveId);
    });
  }

  hide() {
    this.hidedetail = !this.hidedetail;
  }
}
