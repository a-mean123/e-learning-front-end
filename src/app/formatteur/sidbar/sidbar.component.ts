import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {

  constructor(public _auth: AuthService) { }
user: any;
  ngOnInit(): void {

   this.user = this._auth.getUserData();
console.log(this.user);

  }
}
