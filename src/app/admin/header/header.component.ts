import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth: AuthService) { }
user: any;
  ngOnInit(): void {

   this.user = this._auth.getUserData();
console.log(this.user);

  }

}
