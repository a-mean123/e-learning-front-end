import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-asid',
  templateUrl: './asid.component.html',
  styleUrls: ['./asid.component.css']
})
export class AsidComponent implements OnInit {

  constructor(public _auth: AuthService) { }
user: any;
  ngOnInit(): void {

   this.user = this._auth.getUserData();
console.log(this.user);

  }
}
