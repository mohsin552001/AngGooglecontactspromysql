import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirstserviceService } from 'src/app/services/firstservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  userForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    Jobtitlecomp: new FormControl('', Validators.required),
  });

  getparamId: any;
  constructor(
    private Service: FirstserviceService,
    private router: ActivatedRoute
  ) {
    this.getparamId = this.router.snapshot.paramMap.get('id');
  }

  userSubmit() {
    console.log(this.userForm.value);
    if (this.userForm.valid) {
      this.Service.createUser(this.userForm.value).subscribe((res) => {
        console.log('data has been sent thanks');
        this.userForm.reset();
      });
    } else {
      console.log('there is something wrong while creat user');
    }
  }

  upDateId() {
    this.Service.updateUser(this.getparamId, this.userForm.value).subscribe(
      (res) => {
        console.log('this user is updated right now');
      }
    );
  }

  ngOnInit(): void {}
}
