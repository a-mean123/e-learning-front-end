import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(public _auth: AuthService) { }
  user: any;
  ngOnInit(): void {

   this.user = this._auth.getUserData();
  console.log(this.user);

  }

}
